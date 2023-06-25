import { Product } from "src/types/product.type";
import { User } from "src/types/user.type";

export class CreatePaymentRequest {
  products: Product[];
  card: number;
  user: User;
}
