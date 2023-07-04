import { BadRequestException } from "@nestjs/common";

export class MessageHandler {

    constructor(public msg: string) {
        switch (msg) {
            case 'invalid-product':
                throw new BadRequestException('Invalid product');
            case 'insufficient-quantity':
                throw new BadRequestException('Insufficient quantity');
            default:
                this.msg = this.msg;
                break;
        }
    }
}