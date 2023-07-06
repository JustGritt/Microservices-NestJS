/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "payment";

export interface PaymentEvent {
  products: Product[];
  card: string;
  token: string;
}

export interface Product {
  _id: string;
  quantity: number;
}