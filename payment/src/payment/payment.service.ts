import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PAYMENTS } from './payment.mock';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentEvent } from 'src/events/create-payment.event';
import { CreatePaymentRequest } from 'src/requests/create-payment-request.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PaymentService {
    private payments = PAYMENTS

    constructor(
        @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
    ) {
    }
    public getPayments() {
        return this.payments;
    }

    async createPayment(createUserReq: CreatePaymentRequest) {
        this.payments.push(createUserReq as any);

        const response$ = (this.client.send('payment_created', new CreatePaymentEvent(createUserReq)));
        const authorizationResponse = await lastValueFrom(response$);
        throw new BadRequestException('yrdt');
        return authorizationResponse;
    }
}
