import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HostelsModule } from './hostels/hostels.module';
import { RoomsModule } from './rooms/rooms.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [PrismaModule, HostelsModule, RoomsModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
