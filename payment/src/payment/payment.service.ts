import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentEvent } from './payment';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Payment } from 'src/types/payment.type';
import { Model } from 'mongoose';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(Payment.name) private paymentModel: Model<Payment>,
      ) {}
      private payments: Payment[] = [];
      
    async createPayment(data: PaymentEvent) {
        const createdPayment = new this.paymentModel({
          ...data,
          user: data.user,
        });
        const savedPayment = await createdPayment.save();
    
        return savedPayment;
      }
}
