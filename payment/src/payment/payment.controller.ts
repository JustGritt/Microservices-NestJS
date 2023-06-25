import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { Response } from 'express';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {

    }

    @Get()
    async get() {
        return this.paymentService.getPayments();
    }

    @Post()
    async createPayment(@Body() createPaymentReq: CreatePaymentRequest) {
        return this.paymentService.createPayment(createPaymentReq);
    }
}
