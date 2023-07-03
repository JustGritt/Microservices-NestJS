"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CR_UD_SERVICE_NAME = exports.ProductCRUDServiceControllerMethods = exports.PRODUCT_V1ALPHA_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "product.v1alpha";
exports.PRODUCT_V1ALPHA_PACKAGE_NAME = "product.v1alpha";
function ProductCRUDServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["get", "add", "update", "delete"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ProductCRUDService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ProductCRUDService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ProductCRUDServiceControllerMethods = ProductCRUDServiceControllerMethods;
exports.PRODUCT_CR_UD_SERVICE_NAME = "ProductCRUDService";
//# sourceMappingURL=product.js.map