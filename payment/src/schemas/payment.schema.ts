import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    required: false,
  })

  @Prop({ required: false })
  amount?: number;

  @Prop({type: Object, required: false })
  user: { id: number; firstname: string; lastname: string; email: string };
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
