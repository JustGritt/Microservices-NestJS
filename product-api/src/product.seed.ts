import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProductService } from './product.service';

@Injectable()
export class ProductSeed {
  constructor(private readonly productService: ProductService) {}

  @Command({
    command: 'create:product',
    describe: 'create a product',
  })
  async create() {
    const product = await this.productService.createMany([{
      name: 'bananes',
      price: 100,
    },
    {
      name: 'pommes',
      price: 200,
    }
  ]);
    console.log(product);
  }
}
