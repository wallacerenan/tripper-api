import { AccountsModule } from '@modules/accounts/accounts.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
