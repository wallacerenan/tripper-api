import { LoginUserDto } from '@/domain/accounts/dtos/login-user.dto';
import { RegisterUserDto } from '@/domain/accounts/dtos/register-user.dto';
import { UseCaseLoginUser } from '@/domain/accounts/usecases/login-user';
import { UseCaseRegisterUser } from '@/domain/accounts/usecases/register-user';
import { Public } from '@/infra/auth/public';
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AccountsController {
  constructor(
    private readonly usecaseRegisterUser: UseCaseRegisterUser,
    private readonly useCaseLoginUser: UseCaseLoginUser,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/register')
  @Public()
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.usecaseRegisterUser.execute(registerUserDto);
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  @Public()
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.useCaseLoginUser.execute(loginUserDto);
    return { user };
  }
}
