import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async get() {
    return this.paymentService.getPayments();
  }

  @MessagePattern('payment_created')
  async handleCreatePayment(data: CreatePaymentEvent) {
    return this.paymentService.handleCreatePayment(data);
  }
}
