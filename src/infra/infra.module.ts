import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';

import { HttpModule } from '@infra/http/http.module';

import { DatabaseModule } from './database/database.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    DatabaseModule,
    RouterModule.register([
      {
        path: 'api',
        module: HttpModule,
      },
    ]),
    HttpModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [DatabaseModule],
})
export class InfraModule {}
