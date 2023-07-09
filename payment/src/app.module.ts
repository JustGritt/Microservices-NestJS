import { Module } from '@nestjs/common';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './types/product.type';
import { Payment } from './types/payment.type';
import { User } from './types/user.type';
import { ProductSchema } from './schemas/product.schema';
import { PaymentSchema } from './schemas/payment.schema';
import { UserSchema } from './schemas/user.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
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
