import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { microserviceOptions } from './grpc.options';

const logger = new Logger('Main');

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
