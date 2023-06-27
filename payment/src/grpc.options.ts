import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";


export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'payment',
      protoPath: join(__dirname, '../src/payment/payment.proto'),
    },
  };
  