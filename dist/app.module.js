"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const ticket_module_1 = require("./ticket/ticket.module");
const admin_module_1 = require("./admin/admin.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./user/entities/user.entity");
const ticket_entity_1 = require("./ticket/entities/ticket.entity");
const admin_entity_1 = require("./admin/entities/admin.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (config) => {
                    return {
                        type: 'sqlite',
                        database: config.get('DB_NAME'),
                        entities: [user_entity_1.User, ticket_entity_1.Ticket, admin_entity_1.Admin],
                        synchronize: true,
                    };
                }
            }),
            user_module_1.UserModule,
            ticket_module_1.TicketModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map