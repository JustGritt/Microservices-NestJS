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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let ProductService = exports.ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        try {
            return this.prisma.product.create({
                data,
            });
        }
        catch (error) {
            throw new Error(`${data.name} name is taken`);
        }
    }
    findAll() {
        return this.prisma.product.findMany();
    }
    findById(id) {
        return this.prisma.product.findUnique({
            where: { id },
        });
    }
    async find(id, name) {
        const product = await this.prisma.product.findFirst({
            where: { OR: [{ id: Number(id) }, { name }] },
        });
        if (!product) {
            throw new Error(`product with id ${id} or name ${name} not found`);
        }
        return product;
    }
    async update(id, data) {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }
    async delete(name) {
        const product = await this.prisma.product.findFirst({
            where: { name: name },
        });
        if (!product) {
            throw new Error(`product with name ${name} not found`);
        }
        return this.prisma.product.delete({
            where: { id: product.id },
        });
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map