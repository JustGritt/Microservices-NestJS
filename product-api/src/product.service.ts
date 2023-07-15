import { Injectable } from '@nestjs/common';
import { Product } from './stubs/product/v1alpha/product';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createMany(data: Prisma.ProductCreateInput[]) {
    return this.prisma.product.createMany({ data });
  }
  create(data: Prisma.ProductCreateInput): Promise<Product> {
    try {
      return this.prisma.product.create({
        data,
      });
    }
    catch (error) {
      throw new Error(`${data.name} name is taken`);
    }
  }
  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  findById(id: number): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }
  async find(id: string | number, name: string) {
    const product = await this.prisma.product.findFirst({
      where: { OR: [{ id: Number(id) }, { name }] },
    });

    if (!product) {
      throw new Error(`product with id ${id} or name ${name} not found`);
    }

    return product;
  }

  async update(id: number, data: Prisma.ProductUpdateInput): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(name: string) {
    //find product by name then delete
    const product = await this.prisma.product.findFirst({
      where: {  name: name }, 
    });
    if (!product) {
      throw new Error(`product with name ${name} not found`);
    }
    return this.prisma.product.delete({
      where: { id: product.id },
    });
  }

}