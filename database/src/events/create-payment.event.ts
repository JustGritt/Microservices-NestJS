import { Payment } from 'src/schemas/payment.schema';

export interface PaymentEvent {
  products: Product[];
  card: number;
  token: string;
}

export class Product {
  _id: string;
  quantity: number;
}
