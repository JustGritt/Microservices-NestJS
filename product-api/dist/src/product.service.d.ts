import { Product } from './stubs/product/v1alpha/product';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ProductCreateInput): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    find(id: string | number, name: string): Promise<{
        id: number;
        name: string;
        price: number;
    } & {}>;
    update(id: number, data: Prisma.ProductUpdateInput): Promise<Product>;
    delete(name: string): Promise<{
        id: number;
        name: string;
        price: number;
    } & {}>;
}
