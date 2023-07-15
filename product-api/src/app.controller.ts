import { Controller, Body, Headers, Post, Get, Req, BadRequestException } from '@nestjs/common';
import { Client, ClientGrpc, RpcException } from '@nestjs/microservices';
import { ProductService } from './product.service';
import {
  GetRequest,
  GetResponse,
  Product,
  PRODUCT_PACKAGE_NAME,
  PRODUCT_SERVICE_NAME,
  ProductServiceController,
} from './stubs/product/v1alpha/product';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import { AuthServiceClient } from './stubs/auth/v1alpha/auth';
import { authMicroserviceOptions } from 'config/grpc.config';
import { AUTH_SERVICE_NAME } from './stubs/auth/auth';
import { authUser } from 'helpers/utils';
import { ParamType, ProductType } from './types/app.types';


@Controller()
export class AppController {

  @Client(authMicroserviceOptions)
  private clientAuth: ClientGrpc;


  private grpcAuthService: AuthServiceClient;


  constructor(
    private readonly productService: ProductService,
  ) { }

  onModuleInit() {
    if(this.clientAuth)
      this.grpcAuthService = this.clientAuth.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'checkProduct')
  async checkProduct(param: GetRequest) {
    try {
      if (!param.id || typeof param.id !== 'number') {
        return { error: 'invalid-id' };
      }
      const product = await this.productService.findById(param.id);
      if (!product || Object.keys(product).length === 0) {
        return { error: 'product-not-found' };
      }
      return product as GetResponse;
    } catch (error) {
      return { error: 'internal-error' };
    }
  }

  @Get('/')
  async getAll() {
    try {
      const products = await this.productService.findAll();
      return { products };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @Get('/:id')
  async get(@Req() request: ParamType) {
    try {
      let product: Product;
      let products: Product[] = [];
      if (request.id) {
        product = await this.productService.findById(request.id);
        return { products: [product] };
      } else {
        throw new BadRequestException('id is required');
      }
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @Get('/:id')
  async update(@Req() request: ParamType, @Body() body: ProductType, @Headers('Authorization') auth: string) {
    try {
      await authUser(auth, this.grpcAuthService)
      if(!request.id) throw new BadRequestException('id is required')
      if(!body.name) throw new BadRequestException('name is required')

      const product = await this.productService.update(request.id, {
        name: body.name,
        price: body.price,
      });
      return { product }
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  @Post()
  async add(@Body() body: ProductType, @Headers('Authorization') auth: string) {
    try {
      await authUser(auth, this.grpcAuthService)
      const data = {
        name: body?.name,
        price: body.price,
      };
      const product = await this.productService.create(data);
      return { product };
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}