import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule, TicketModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
