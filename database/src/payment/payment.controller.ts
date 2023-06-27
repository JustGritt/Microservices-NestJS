import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { GrpcMethod } from '@nestjs/microservices';
import { PaymentEvent } from './payment';
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async get() {
    return this.paymentService.getPayments();
  }

  @GrpcMethod('PaymentController', 'CreatePayment')
  async handleCreatePayment(data: PaymentEvent) {
    return this.paymentService.handleCreatePayment(data);
  }
}
