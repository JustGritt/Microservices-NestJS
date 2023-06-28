import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Client, ClientGrpc, EventPattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { Response } from 'express';
import { microserviceOptions } from 'src/grpc.options';
import { PaymentController as PaymentController_ } from 'src/payment/payment.controller';
import { PaymentService } from './payment.service';
import { PaymentEvent } from './payment';


@Controller('payment')
export class PaymentController {

    constructor(private readonly grpcService: PaymentService) { }

    @Post()
    async createPayment(@Body() createPaymentReq: PaymentEvent) {
        return this.grpcService.handleCreatePayment(createPaymentReq);
    }
}
