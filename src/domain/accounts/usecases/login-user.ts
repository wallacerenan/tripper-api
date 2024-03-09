import { HttpException, Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UseCase } from '@core/use-case';
import { InternalServerError } from '@/core/domain/errors/internal-error';
import { AccountNotExistsError } from './errors/account-not-exists-error';
import { Encryptor } from '@/domain/cryptography/encryptor';
import { WrongCredentialsError } from './errors/wrong-credentials-error';
import { UsersRepository } from '@/infra/database/repositories/users-repository';

@Injectable()
export class UseCaseLoginUser implements UseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptor: Encryptor,
  ) {}

  async execute(loginUserDto: LoginUserDto) {
    try {
      const user = await this.usersRepository.findByEmail(loginUserDto.email);

      if (!user) {
        throw new AccountNotExistsError('user');
      }

      const isPasswordValid = await this.encryptor.compare(
        loginUserDto.password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new WrongCredentialsError();
      }

      return { user };
    } catch (error) {
      console.log(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerError(error?.message);
    }
  }
}
