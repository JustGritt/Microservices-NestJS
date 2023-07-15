import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { authMicroserviceOptions, productMicroserviceOptions } from '../config/grpc.config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');
const PRODUCT_API_PORT = process.env.PRODUCT_API_PORT ?? 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(productMicroserviceOptions);


  await app.startAllMicroservices();
  await app.listen(PRODUCT_API_PORT).then(() => {
    logger.log(
      `Auth API is listening on port ${PRODUCT_API_PORT}`,
    );
  });
}

bootstrap();