import { AccountsModule } from '@/infra/http/accounts/accounts.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AccountsModule],
  providers: [],
})
export class HttpModule {}
