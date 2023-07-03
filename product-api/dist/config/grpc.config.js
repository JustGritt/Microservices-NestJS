"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
const product_1 = require("../src/stubs/product/v1alpha/product");
const path_1 = require("path");
const nestjs_grpc_reflection_1 = require("nestjs-grpc-reflection");
exports.grpcConfig = (0, nestjs_grpc_reflection_1.addReflectionToGrpcConfig)({
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:6000',
        package: product_1.PRODUCT_V1ALPHA_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/product/v1alpha/product.proto'),
    },
});
//# sourceMappingURL=grpc.config.js.map