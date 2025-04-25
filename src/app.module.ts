import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { Ticket } from './ticket/entities/ticket.entity';
import { Admin } from './admin/entities/admin.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    return {
      type: 'sqlite',
      database: config.get<string>('DB_NAME'),
      entities: [User, Ticket, Admin],
      synchronize: true,
    };
  }
    }),
    UserModule,
    TicketModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
