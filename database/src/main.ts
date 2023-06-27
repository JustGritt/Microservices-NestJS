import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'payment',
    protoPath: join(__dirname, '../src/payment/payment.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  await app.listen().then(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
