import { Body, Controller, Headers, HttpStatus, Logger, OnModuleInit, Post, Inject } from '@nestjs/common';
import { Client, ClientGrpc, EventPattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { Response } from 'express';
import { microserviceOptions } from 'src/grpc.options';
import { PaymentController as PaymentController_ } from 'src/payment/payment.controller';
import { PaymentService } from './payment.service';
import { CreatePaymentReq, PaymentEvent } from './payment';

import { firstValueFrom } from 'rxjs';
import { AuthServiceClient } from 'src/stubs/auth/auth';


@Controller('payment')
export class PaymentController {

    @Client(microserviceOptions)
    private client: ClientGrpc;

    private grpcService: AuthServiceClient;

    constructor(private readonly paymentService: PaymentService) { }

    onModuleInit() {
        this.grpcService = this.client.getService<AuthServiceClient>('AuthService');
    }

    @Post()
    async createPayment(@Body() createPaymentReq: CreatePaymentReq, @Headers('Authorization') auth: string) {
        if (!auth) {
            return { error: 'unauthorized' };
        }
        const token = auth.substring(7, auth.length);
        const response = await firstValueFrom(this.grpcService.validateUser({ token: token }));
        if (response.error) {
            return response;
        }
        const payment = await this.paymentService.createPayment({
            ...createPaymentReq,
            user: response.user,
        });
        return payment;
    }
}
