import { JwtService } from '@nestjs/jwt';
import { HttpException, Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UseCase } from '@core/use-case';
import { InternalServerError } from '@/core/domain/errors/internal-error';
import { AccountNotExistsError } from './errors/account-not-exists-error';
import { Encryptor } from '@/domain/cryptography/encryptor';
import { WrongCredentialsError } from './errors/wrong-credentials-error';
import { UsersRepository } from '@/infra/database/repositories/users-repository';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';

@Injectable()
export class UseCaseLoginUser implements UseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptor: Encryptor,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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

      const accessToken = await this.jwtService.signAsync({
        sub: user.id,
      });

      const refreshToken = await this.jwtService.signAsync(
        {
          sub: user.id,
        },
        {
          secret: this.configService.get('JWT_REFRESH_TOKEN_SECRECT'),
          expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIREIN'),
        },
      );

      const token = {
        type: 'bearer',
        accessToken,
        refreshToken,
      };

      return { user: new User(user), token };
    } catch (error) {
      console.log(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerError(error?.message);
    }
  }
}
