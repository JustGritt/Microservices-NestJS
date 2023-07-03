import { Controller, HttpStatus, Inject, UseGuards } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { ProductService } from './product.service';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  Product,
  ProductCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  ProductCRUDServiceControllerMethods,
} from './stubs/product/v1alpha/product';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
@Controller()
@ProductCRUDServiceControllerMethods()
export class AppController implements ProductCRUDServiceController {
  constructor(
    private productService: ProductService,
    ) {}
  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let product: Product;
    let products: Product[] = [];
    if (request.id) {
      product = await this.productService.findById(request.id);
      return { products: [product] };
    } else {
      products = await this.productService.findAll();
      return { products };
    }
  }
  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    try { 
      const product = await this.productService.update(request.product.id, {
        name: request.product.name,
        price: request.product.price,
        });
      return { product }
    } catch (error) {
      throw new RpcException(error);
    }
  }
  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    try {
      const product = await this.productService.delete(request.name);
      return { message: `Product ${product.name} deleted` };
    } catch (error) {
      throw new RpcException(error);
    }
  }
  async add(request: AddRequest): Promise<AddResponse> {
    try {
      //create data object
      const data = {
        name: request?.name,
        price: request.price,
      };
      const product = await this.productService.create(data);
      return { product };
    } catch (error) {
      throw new RpcException(error);
    }
  }
  
}