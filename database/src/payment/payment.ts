/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "payment";

export interface PaymentEvent {
  products: Product[];
  card: string;
  token: string;
}

export interface PaymentResponse {
  success?: PaymentSuccess | undefined;
  error?: PaymentError | undefined;
}

export interface PaymentSuccess {
  products: Product[];
  amount: number;
  user: User | undefined;
}

export interface PaymentError {
  errorMessage: string;
}

export interface Product {
  _id: string;
  quantity: number;
}

export interface User {
  firstname: string;
  lastname: string;
  password: string;
}

function createBasePaymentEvent(): PaymentEvent {
  return { products: [], card: "", token: "" };
}

export const PaymentEvent = {
  encode(message: PaymentEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.card !== "") {
      writer.uint32(18).string(message.card);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.card = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentEvent {
    return {
      products: Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      card: isSet(object.card) ? String(object.card) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: PaymentEvent): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    message.card !== undefined && (obj.card = message.card);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentEvent>, I>>(base?: I): PaymentEvent {
    return PaymentEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentEvent>, I>>(object: I): PaymentEvent {
    const message = createBasePaymentEvent();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.card = object.card ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBasePaymentResponse(): PaymentResponse {
  return { success: undefined, error: undefined };
}

export const PaymentResponse = {
  encode(message: PaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success !== undefined) {
      PaymentSuccess.encode(message.success, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      PaymentError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.success = PaymentSuccess.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = PaymentError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentResponse {
    return {
      success: isSet(object.success) ? PaymentSuccess.fromJSON(object.success) : undefined,
      error: isSet(object.error) ? PaymentError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PaymentResponse): unknown {
    const obj: any = {};
    message.success !== undefined &&
      (obj.success = message.success ? PaymentSuccess.toJSON(message.success) : undefined);
    message.error !== undefined && (obj.error = message.error ? PaymentError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentResponse>, I>>(base?: I): PaymentResponse {
    return PaymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentResponse>, I>>(object: I): PaymentResponse {
    const message = createBasePaymentResponse();
    message.success = (object.success !== undefined && object.success !== null)
      ? PaymentSuccess.fromPartial(object.success)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? PaymentError.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBasePaymentSuccess(): PaymentSuccess {
  return { products: [], amount: 0, user: undefined };
}

export const PaymentSuccess = {
  encode(message: PaymentSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentSuccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentSuccess {
    return {
      products: Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: PaymentSuccess): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentSuccess>, I>>(base?: I): PaymentSuccess {
    return PaymentSuccess.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentSuccess>, I>>(object: I): PaymentSuccess {
    const message = createBasePaymentSuccess();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.amount = object.amount ?? 0;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBasePaymentError(): PaymentError {
  return { errorMessage: "" };
}

export const PaymentError = {
  encode(message: PaymentError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorMessage !== "") {
      writer.uint32(10).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentError {
    return { errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "" };
  },

  toJSON(message: PaymentError): unknown {
    const obj: any = {};
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentError>, I>>(base?: I): PaymentError {
    return PaymentError.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentError>, I>>(object: I): PaymentError {
    const message = createBasePaymentError();
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseProduct(): Product {
  return { _id: "", quantity: 0 };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message._id !== "") {
      writer.uint32(10).string(message._id);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message._id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      _id: isSet(object._id) ? String(object._id) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message._id !== undefined && (obj._id = message._id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message._id = object._id ?? "";
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseUser(): User {
  return { firstname: "", lastname: "", password: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstname !== "") {
      writer.uint32(10).string(message.firstname);
    }
    if (message.lastname !== "") {
      writer.uint32(18).string(message.lastname);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      firstname: isSet(object.firstname) ? String(object.firstname) : "",
      lastname: isSet(object.lastname) ? String(object.lastname) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.firstname !== undefined && (obj.firstname = message.firstname);
    message.lastname !== undefined && (obj.lastname = message.lastname);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

export interface PaymentController {
  CreatePayment(request: PaymentEvent): Promise<PaymentResponse>;
}

export const PaymentControllerServiceName = "payment.PaymentController";
export class PaymentControllerClientImpl implements PaymentController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PaymentControllerServiceName;
    this.rpc = rpc;
    this.CreatePayment = this.CreatePayment.bind(this);
  }
  CreatePayment(request: PaymentEvent): Promise<PaymentResponse> {
    const data = PaymentEvent.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePayment", data);
    return promise.then((data) => PaymentResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
