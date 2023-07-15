import { Module } from '@nestjs/common';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './types/product.type';
import { Payment } from './types/payment.type';
import { User } from './types/user.type';
import { PaymentSchema } from './schemas/payment.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    MongooseModule.forRoot(
      process.env.MONGO_URI,
      {
        dbName: 'task',
        user: 'root',
        pass: 'passwd',
      },
    ),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class AppModule { }
