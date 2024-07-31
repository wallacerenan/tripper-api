import { Module } from '@nestjs/common';
import { UseCaseRegisterUser } from './register-user';
import { UseCaseLoginUser } from './login-user';
import { DatabaseModule } from '@/infra/database/database.module';
import { CryptographyModule } from '@/infra/cryptography/cryptography.module';

@Module({
  imports: [CryptographyModule, DatabaseModule],
  exports: [UseCaseRegisterUser, UseCaseLoginUser],
  providers: [UseCaseRegisterUser, UseCaseLoginUser],
})
export class UseCaseAccountsModule {}
