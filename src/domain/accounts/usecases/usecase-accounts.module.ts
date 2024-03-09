import { Module } from '@nestjs/common';
import { UseCaseRegisterUser } from './register-user';
import { UseCaseLoginUser } from './login-user';
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { UsersRepository } from '@/infra/database/repositories/users-repository';
import { Encryptor } from '@/domain/cryptography/encryptor';
import { BcryptEncryptor } from '@/infra/cryptography/bcrypt-encryptor';
import { DatabaseModule } from '@/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [UseCaseRegisterUser, UseCaseLoginUser],
  providers: [
    UseCaseRegisterUser,
    UseCaseLoginUser,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: Encryptor,
      useClass: BcryptEncryptor,
    },
  ],
})
export class UseCaseAccountsModule {}
