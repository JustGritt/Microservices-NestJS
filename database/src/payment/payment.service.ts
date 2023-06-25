import { Injectable } from '@nestjs/common';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { Payment } from 'src/schemas/payment.schema';

@Injectable()
export class PaymentService {
  private payments: Payment[] = [];

  async getPayments() {
    return [];
  }

  async handleCreatePayment(payment: CreatePaymentEvent) {
    console.log('handleCreatePayment - PAYMENT_SERVICE', payment);
    return { status: 'OK' };
  }
}
