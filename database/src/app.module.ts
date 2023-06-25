import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentController } from './payment/payment.controller';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    PaymentModule,
    MongooseModule.forRoot(
      'mongodb://alexbefia:Y4Z4E~%3Av%25L%2675HKG%2C5.hcKGm(BYL.he9@localhost:27017/',
    ),
  ],
})
export class AppModule {}
