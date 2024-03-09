import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './infra/auth/auth.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, InfraModule],
})
export class AppModule {}
