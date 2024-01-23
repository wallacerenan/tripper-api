import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { PrismaUsersRepository } from '../repositories/PrismaUsersRepository';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { IUserController } from './IUserController';
import { conflict, notFound, ok } from '@modules/shared/HttpResponse';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController implements IUserController {
  constructor(private readonly usersRepository: PrismaUsersRepository) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const accountAlreadyExists = await this.usersRepository.exists(
      createUserDto.email,
    );

    if (accountAlreadyExists) {
      throw conflict(`The email ${createUserDto.email} is already registered.`);
    }

    const createdUser = await this.usersRepository.create(createUserDto);

    return ok(createdUser);
  }

  @Get(':id')
  async read(@Param('id') id: string) {
    const user = await this.usersRepository.findById(Number(id));

    if (!user) {
      throw notFound(`The user was not found.`);
    }

    return ok(user);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.save(Number(id), updateUserDto);

    if (!user) {
      throw notFound(`The user was not found.`);
    }

    return ok(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.usersRepository.findById(Number(id));

    if (!user) {
      throw notFound(`The user was not found.`);
    }

    await this.usersRepository.delete(Number(id));
  }

  @Get()
  async findAll() {
    const users = await this.usersRepository.findAll();
    return ok(users);
  }
}
