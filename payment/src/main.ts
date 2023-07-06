import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PAYMENT_API_PORT || 3000);
}
bootstrap();
