import { Module } from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { HostelsController } from './hostels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HostelsController],
  providers: [HostelsService],
  imports: [PrismaModule],
})
export class HostelsModule {}
