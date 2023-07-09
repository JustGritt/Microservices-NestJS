import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductService } from './product.service';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from '../config/grpc.config';
import { PrismaService } from './prisma.service';
@Module({
  imports: [GrpcReflectionModule.register(grpcConfig)],
  controllers: [AppController],
  providers: [ProductService, PrismaService],
})
export class AppModule {}