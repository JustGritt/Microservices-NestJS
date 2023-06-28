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

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot(
      'mongodb://alexbefia:Y4Z4E~%3Av%25L%2675HKG%2C5.hcKGm(BYL.he9@localhost:27017/',
      {
        dbName: 'nest',
      },
    ),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class AppModule { }
