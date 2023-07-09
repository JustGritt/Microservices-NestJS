import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentEvent } from './payment';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Payment } from 'src/types/payment.type';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(Payment.name) private paymentModel: Model<Payment>,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Product.name) private productModel: Model<Product>,
      ) {}
      private payments: Payment[] = [];
      
    async createPayment(data: PaymentEvent) {
        const products = data.products;
        for (let i = 0; i < products.length; i++) {
          const product = await this.productModel.findById(products[i]._id);
          const product_quantity = products[i].quantity;
          if (!product) {
            return new BadRequestException( 'invalid-product' );
          }
          if (product.quantity < product_quantity) {
            return new BadRequestException('insufficient-quantity');
          }
          product.quantity -= product_quantity;
          await product.save();
        }
    
        const createdPayment = new this.paymentModel({
          ...data,
          user: data.user._id,
        });
        const savedPayment = await createdPayment.save();
    
        return savedPayment;
      }
}
