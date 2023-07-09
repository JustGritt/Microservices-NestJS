import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";


export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url: 'auth-api:50031',
      package: 'auth',
      protoPath: join(__dirname, '../src/protos/auth.proto'),
    },
  };
  