import { Product } from "./product.type";
import { User } from "./user.type";

export class Payment {
    products: Product[];
    user: User;
    card: number;
}
  