import { Payment } from 'src/schemas/payment.schema';

export class CreatePaymentEvent {
  constructor(public readonly payment: PaymentEvent) {}
}

export interface PaymentEvent {
  products: Product[];
  card: number;
  token: string;
}

export class Product {
  _id: string;
  quantity: number;
}
