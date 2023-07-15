import { Product } from './stubs/product/v1alpha/product';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    createMany(data: Prisma.ProductCreateInput[]): Promise<Prisma.BatchPayload>;
    create(data: Prisma.ProductCreateInput): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    find(id: string | number, name: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        price: number;
    }, unknown> & {}>;
    update(id: number, data: Prisma.ProductUpdateInput): Promise<Product>;
    delete(name: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        price: number;
    }, unknown> & {}>;
}
