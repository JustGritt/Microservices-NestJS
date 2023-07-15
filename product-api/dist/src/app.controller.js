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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_service_1 = require("./product.service");
const product_1 = require("./stubs/product/v1alpha/product");
const microservices_2 = require("@nestjs/microservices");
const grpc_config_1 = require("../config/grpc.config");
const auth_1 = require("./stubs/auth/auth");
const utils_1 = require("../helpers/utils");
let AppController = exports.AppController = class AppController {
    constructor(productService) {
        this.productService = productService;
    }
    onModuleInit() {
        this.grpcAuthService = this.clientAuth.getService(auth_1.AUTH_SERVICE_NAME);
    }
    async checkProduct(param) {
        try {
            if (!param.id || typeof param.id !== 'number') {
                return { error: 'invalid-id' };
            }
            const product = await this.productService.findById(param.id);
            if (!product || Object.keys(product).length === 0) {
                return { error: 'product-not-found' };
            }
            return product;
        }
        catch (error) {
            return { error: 'internal-error' };
        }
    }
    async getAll() {
        try {
            const products = await this.productService.findAll();
            return { products };
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
    async get(request) {
        try {
            let product;
            let products = [];
            if (request.id) {
                product = await this.productService.findById(request.id);
                return { products: [product] };
            }
            else {
                throw new common_1.BadRequestException('id is required');
            }
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
    async update(request, body, auth) {
        try {
            await (0, utils_1.authUser)(auth, this.grpcAuthService);
            if (!request.id)
                throw new common_1.BadRequestException('id is required');
            if (!body.name)
                throw new common_1.BadRequestException('name is required');
            const product = await this.productService.update(request.id, {
                name: body.name,
                price: body.price,
            });
            return { product };
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
    async add(body, auth) {
        try {
            await (0, utils_1.authUser)(auth, this.grpcAuthService);
            const data = {
                name: body === null || body === void 0 ? void 0 : body.name,
                price: body.price,
            };
            const product = await this.productService.create(data);
            return { product };
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
};
__decorate([
    (0, microservices_1.Client)(grpc_config_1.authMicroserviceOptions),
    __metadata("design:type", Object)
], AppController.prototype, "clientAuth", void 0);
__decorate([
    (0, microservices_2.GrpcMethod)(product_1.PRODUCT_SERVICE_NAME, 'checkProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkProduct", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "add", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppController);
//# sourceMappingURL=app.controller.js.map