import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import { PRODUCT_PACKAGE_NAME } from "./stubs/product/v1alpha/product";
import { AUTH_PACKAGE_NAME } from "./stubs/auth/auth";


export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: 'auth-api:50031',
      package: AUTH_PACKAGE_NAME,
      protoPath: join(__dirname, '../src/protos/auth/auth.proto'),
    },
  };

  export const productMicroserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: 'product-api:50131',
      package: PRODUCT_PACKAGE_NAME,
      protoPath: join(__dirname, '../src/protos/product/v1alpha/product.proto'),
    },
  };