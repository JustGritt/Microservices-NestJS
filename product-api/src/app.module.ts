import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductService } from './product.service';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { authMicroserviceOptions } from '../config/grpc.config';
import { PrismaService } from './prisma.service';
import { ClientsModule } from '@nestjs/microservices';
import { ProductSeed } from './product.seed';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    CommandModule,
  ],
  controllers: [AppController],
  providers: [ProductService, PrismaService, ProductSeed],
  exports: [ProductSeed],
})
export class AppModule { }