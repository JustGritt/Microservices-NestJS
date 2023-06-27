import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Client, ClientGrpc, EventPattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { Response } from 'express';
import { microserviceOptions } from 'src/grpc.options';
import { PaymentController as PaymentController_ } from 'src/payment/payment.controller';


@Controller('payment')
export class PaymentController {

    @Client(microserviceOptions)
    private client: ClientGrpc;
    
    private grpcService: PaymentController_;

    onModuleInit(){
        this.grpcService = this.client.getService<PaymentController_>('PaymentController');
    }

    @Post()
    async createPayment(@Body() createPaymentReq: CreatePaymentRequest) {
        return this.grpcService.createPayment(createPaymentReq);
    }
}
