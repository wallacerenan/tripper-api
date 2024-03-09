import { HttpException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { UseCase } from '@core/use-case';
import { InternalServerError } from '@/core/domain/errors/internal-error';
import { Encryptor } from '@/domain/cryptography/encryptor';
import { AccountAlreadyExistsError } from './errors/account-already-exists-error';
import { UsersRepository } from '@/infra/database/repositories/users-repository';

@Injectable()
export class UseCaseRegisterUser implements UseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptor: Encryptor,
  ) {}

  async execute(registerDto: RegisterUserDto) {
    try {
      const accountAlreadyExists = await this.usersRepository.findByEmail(
        registerDto.email,
      );

      if (accountAlreadyExists) {
        throw new AccountAlreadyExistsError(registerDto.email);
      }

      const hashedPassword = await this.encryptor.hash(registerDto.password);

      const createdUser = await this.usersRepository.create({
        ...registerDto,
        password: hashedPassword,
      });

      return createdUser;
    } catch (error) {
      console.log(error);
      console.log(registerDto);
      if (error instanceof HttpException) throw error;
      throw new InternalServerError(error?.message);
    }
  }
}
