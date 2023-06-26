import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PAYMENTS } from './payment.mock';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { lastValueFrom } from 'rxjs';
import { MessageHandler } from 'src/errors/messagesHandler';
var valid = require("card-validator");

@Injectable()
export class PaymentService {

    constructor(
        @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
    ) {
    }
    public getPayments() {
        return [];
    }

    async createPayment(createUserReq: CreatePaymentRequest) {
        if (!valid.number(createUserReq.card).isValid) {
            throw new BadRequestException('Invalid card number');
        }
        const response$ = (this.client.send('payment_created', new CreatePaymentEvent(createUserReq)));
        const authorizationResponse = await lastValueFrom(response$);
        return new MessageHandler(authorizationResponse).msg;
    }
}
