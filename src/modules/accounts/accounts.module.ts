import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { PrismaUsersRepository } from './repositories/PrismaUsersRepository';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [PrismaUsersRepository],
})
export class AccountsModule {}
