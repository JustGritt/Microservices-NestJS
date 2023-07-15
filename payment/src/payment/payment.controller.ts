import { Body, Controller, Headers, HttpStatus, Logger, OnModuleInit, Post, Inject, BadRequestException } from '@nestjs/common';
import { Client, ClientGrpc, EventPattern } from '@nestjs/microservices';
import { microserviceOptions, productMicroserviceOptions, } from 'src/grpc.options';
import { PaymentService } from './payment.service';
import { CreatePaymentReq, PaymentEvent } from './payment';

import { AUTH_SERVICE_NAME, AuthServiceClient } from '../stubs/auth/auth';
import { authUser } from '../helpers/utils';
import { GetResponse, PRODUCT_SERVICE_NAME, ProductServiceClient } from 'src/stubs/product/v1alpha/product';
import { firstValueFrom } from 'rxjs';


@Controller('payment')
export class PaymentController {

    @Client(microserviceOptions)
    private clientAuth: ClientGrpc;

    @Client(productMicroserviceOptions)
    private clientProduct: ClientGrpc;

    private grpcService: AuthServiceClient;
    private grpcProductService: ProductServiceClient;

    constructor(private readonly paymentService: PaymentService) { }

    onModuleInit() {
        this.grpcService = this.clientAuth.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
        this.grpcProductService = this.clientProduct.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
    }

    @Post()
    async createPayment(@Body() createPaymentReq: CreatePaymentReq, @Headers('Authorization') auth: string) {
        try {
            const response = await authUser(this.grpcService, auth)
            for (let i = 0; i < createPaymentReq.products.length; i++) {
                const product_payload = createPaymentReq.products[i];
                const product = await firstValueFrom<GetResponse>(this.grpcProductService.checkProduct({ id: product_payload.id }));
                if (!product || product.error) {
                    return new BadRequestException(`Product with id ${product_payload.id} not found`);
                }
            }
            const payment = await this.paymentService.createPayment({
                ...createPaymentReq,
                user: response,
            });
            return payment;
        } catch (error) {
            return new BadRequestException(error.message);
        }
    }
}
