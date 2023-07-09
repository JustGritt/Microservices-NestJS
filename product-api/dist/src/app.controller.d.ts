import { ProductService } from './product.service';
import { AddRequest, AddResponse, DeleteRequest, DeleteResponse, GetRequest, GetResponse, ProductCRUDServiceController, UpdateRequest, UpdateResponse } from './stubs/product/v1alpha/product';
import { Metadata } from '@grpc/grpc-js';
export declare class AppController implements ProductCRUDServiceController {
    private productService;
    constructor(productService: ProductService);
    get(request: GetRequest, metadata?: Metadata): Promise<GetResponse>;
    update(request: UpdateRequest, metadata?: Metadata): Promise<UpdateResponse>;
    delete(request: DeleteRequest, metadata?: Metadata): Promise<DeleteResponse>;
    add(request: AddRequest): Promise<AddResponse>;
}
