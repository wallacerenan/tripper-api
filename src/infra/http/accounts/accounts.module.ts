import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { UseCaseAccountsModule } from '@/domain/accounts/usecases/usecase-accounts.module';

@Module({
  imports: [UseCaseAccountsModule],
  controllers: [AccountsController],
  exports: [],
})
export class AccountsModule {}
