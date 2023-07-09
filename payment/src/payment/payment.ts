/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { AuthResponse } from "src/stubs/auth/auth";

export const protobufPackage = "payment";

export interface CreatePaymentReq {
  products: Product[];
  card: string;
}

export interface PaymentEvent {
  products: Product[];
  card: string;
  user: AuthResponse['user'];
}

export interface Product {
  _id: string;
  quantity: number;
}