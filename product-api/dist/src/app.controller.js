"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_service_1 = require("./product.service");
const product_1 = require("./stubs/product/v1alpha/product");
let AppController = exports.AppController = class AppController {
    constructor(productService) {
        this.productService = productService;
    }
    async get(request, metadata) {
        let product;
        let products = [];
        if (request.id) {
            product = await this.productService.findById(request.id);
            return { products: [product] };
        }
        else {
            products = await this.productService.findAll();
            return { products };
        }
    }
    async update(request, metadata) {
        try {
            const product = await this.productService.update(request.product.id, {
                name: request.product.name,
                price: request.product.price,
            });
            return { product };
        }
        catch (error) {
            throw new microservices_1.RpcException(error);
        }
    }
    async delete(request, metadata) {
        try {
            const product = await this.productService.delete(request.name);
            return { message: `Product ${product.name} deleted` };
        }
        catch (error) {
            throw new microservices_1.RpcException(error);
        }
    }
    async add(request) {
        try {
            const data = {
                name: request === null || request === void 0 ? void 0 : request.name,
                price: request.price,
            };
            const product = await this.productService.create(data);
            return { product };
        }
        catch (error) {
            throw new microservices_1.RpcException(error);
        }
    }
};
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    (0, product_1.ProductCRUDServiceControllerMethods)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppController);
//# sourceMappingURL=app.controller.js.map