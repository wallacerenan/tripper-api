import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '@/config/jwt';

@Module({
  imports: [JwtModule.register(jwtConfig)],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
