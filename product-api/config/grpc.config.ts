import { ClientProviderOptions, GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '../src/stubs/auth/auth';
import { PRODUCT_PACKAGE_NAME } from 'src/stubs/product/v1alpha/product';


export const authMicroserviceOptions: ClientProviderOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'auth-api:50031',
    package: AUTH_PACKAGE_NAME,
    protoPath: join(__dirname, '../src/proto/auth/auth.proto'),
  },
} as ClientProviderOptions;



export const productMicroserviceOptions: ClientProviderOptions = {
  name: PRODUCT_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50131',
    package: PRODUCT_PACKAGE_NAME,
    protoPath: join(__dirname, '../src/proto/product/v1alpha/product.proto'),
  },
} as ClientProviderOptions;

