/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "payment";

export interface PaymentEvent {
  products: PaymentEvent_Product[];
  card: string;
  token: string;
}

export interface PaymentEvent_Product {
  Id: string;
  quantity: number;
}

export interface Response {
  msg: string;
}

function createBasePaymentEvent(): PaymentEvent {
  return { products: [], card: "", token: "" };
}

export const PaymentEvent = {
  encode(message: PaymentEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      PaymentEvent_Product.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.products.push(PaymentEvent_Product.decode(reader, reader.uint32()));
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
      products: Array.isArray(object?.products)
        ? object.products.map((e: any) => PaymentEvent_Product.fromJSON(e))
        : [],
      card: isSet(object.card) ? String(object.card) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: PaymentEvent): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? PaymentEvent_Product.toJSON(e) : undefined);
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
    message.products = object.products?.map((e) => PaymentEvent_Product.fromPartial(e)) || [];
    message.card = object.card ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBasePaymentEvent_Product(): PaymentEvent_Product {
  return { Id: "", quantity: 0 };
}

export const PaymentEvent_Product = {
  encode(message: PaymentEvent_Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentEvent_Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentEvent_Product();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Id = reader.string();
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

  fromJSON(object: any): PaymentEvent_Product {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: PaymentEvent_Product): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentEvent_Product>, I>>(base?: I): PaymentEvent_Product {
    return PaymentEvent_Product.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentEvent_Product>, I>>(object: I): PaymentEvent_Product {
    const message = createBasePaymentEvent_Product();
    message.Id = object.Id ?? "";
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return { msg: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return { msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.msg = object.msg ?? "";
    return message;
  },
};

export interface PaymentController {
  CreatePayment(request: PaymentEvent): Promise<Response>;
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
  CreatePayment(request: PaymentEvent): Promise<Response> {
    const data = PaymentEvent.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePayment", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
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
