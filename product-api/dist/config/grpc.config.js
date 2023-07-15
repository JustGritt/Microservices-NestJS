"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMicroserviceOptions = exports.authMicroserviceOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const auth_1 = require("../src/stubs/auth/auth");
const product_1 = require("../src/stubs/product/v1alpha/product");
exports.authMicroserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: 'auth-api:50031',
        package: auth_1.AUTH_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../src/proto/auth/auth.proto'),
    },
};
exports.productMicroserviceOptions = {
    name: product_1.PRODUCT_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50131',
        package: product_1.PRODUCT_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../src/proto/product/v1alpha/product.proto'),
    },
};
//# sourceMappingURL=grpc.config.js.map