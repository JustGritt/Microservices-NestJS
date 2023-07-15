import { BadRequestException } from '@nestjs/common';
import { ProductService } from './product.service';
import { GetRequest, GetResponse, Product } from './stubs/product/v1alpha/product';
import { ParamType, ProductType } from './types/app.types';
export declare class AppController {
    private readonly productService;
    private clientAuth;
    private grpcAuthService;
    constructor(productService: ProductService);
    onModuleInit(): void;
    checkProduct(param: GetRequest): Promise<GetResponse>;
    getAll(): Promise<BadRequestException | {
        products: Product[];
    }>;
    get(request: ParamType): Promise<BadRequestException | {
        products: Product[];
    }>;
    update(request: ParamType, body: ProductType, auth: string): Promise<BadRequestException | {
        product: Product;
    }>;
    add(body: ProductType, auth: string): Promise<BadRequestException | {
        product: Product;
    }>;
}
