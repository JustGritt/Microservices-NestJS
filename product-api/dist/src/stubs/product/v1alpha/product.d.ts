import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "product";
export interface Product {
    name?: string | undefined;
    id?: number | undefined;
    price?: number | undefined;
}
export interface GetRequest {
    id?: number | undefined;
}
export interface GetResponse {
    product?: Product | undefined;
    error?: string | undefined;
}
export declare const PRODUCT_PACKAGE_NAME = "product";
export interface ProductServiceClient {
    checkProduct(request: GetRequest, metadata?: Metadata): Observable<GetResponse>;
}
export interface ProductServiceController {
    checkProduct(request: GetRequest, metadata?: Metadata): Promise<GetResponse> | Observable<GetResponse> | GetResponse;
}
export declare function ProductServiceControllerMethods(): (constructor: Function) => void;
export declare const PRODUCT_SERVICE_NAME = "ProductService";
