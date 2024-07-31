import { Module } from '@nestjs/common';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  exports: [DatabaseModule],
})
export class InfraModule {}
