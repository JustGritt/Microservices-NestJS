import { Body, Controller, Get, HttpStatus, Logger, OnModuleInit, Post, Inject } from '@nestjs/common';
import { Client, ClientGrpc, EventPattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { Response } from 'express';
import { microserviceOptions } from 'src/grpc.options';
import { PaymentController as PaymentController_ } from 'src/payment/payment.controller';
import { PaymentService } from './payment.service';
import { PaymentEvent, PaymentResponse } from './payment';
import { AuthService } from './auth';
import { firstValueFrom } from 'rxjs';


@Controller('payment')
export class PaymentController {

    @Client(microserviceOptions)
    private client: ClientGrpc;

    private grpcService: AuthService;
    // @Inject()
    // paymentService: PaymentService;

    onModuleInit() {
        this.grpcService = this.client.getService<AuthService>('AuthService');
    }

    @Post()
    async createPayment(@Body() createPaymentReq: PaymentEvent) {
        const response = await firstValueFrom(this.grpcService.validateUser({ token: createPaymentReq.token }));
        if (response.error) {
            
        }
        return response;
    }
}
