"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const grpc_config_1 = require("../config/grpc.config");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice(grpc_config_1.productMicroserviceOptions);
    await app.startAllMicroservices();
    await app.listen((_a = process.env.AUTH_API_PORT) !== null && _a !== void 0 ? _a : 3002).then(() => {
        var _a;
        logger.log(`Auth API is listening on port ${(_a = process.env.AUTH_API_PORT) !== null && _a !== void 0 ? _a : 3002}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map