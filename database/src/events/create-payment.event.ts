import { Payment } from 'src/schemas/payment.schema';

export class CreatePaymentEvent {
  constructor(public readonly payment: Payment) {}
}
