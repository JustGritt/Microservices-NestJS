import { Payment } from "src/types/payment.type";

export class CreatePaymentEvent {
  constructor(public readonly payment: Payment) {}
}
