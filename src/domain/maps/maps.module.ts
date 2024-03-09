import { Module } from '@nestjs/common';
import { MapsController } from './controller/maps.controller';
import { MapsRepository } from './repositories/maps.repository';
import { PrismaService } from '@/infra/database/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [MapsController],
  providers: [MapsRepository],
  exports: [MapsRepository],
})
export class MapsModule {}
