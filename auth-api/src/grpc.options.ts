import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'auth',
    url: '0.0.0.0:50031',
    protoPath: join(__dirname, '../src/protos/auth.proto'),
  },
} as GrpcOptions;
