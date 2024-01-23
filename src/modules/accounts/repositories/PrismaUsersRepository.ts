import { PrismaService } from '@modules/prisma/prisma.service';

import { UsersRepository } from './UsersRepository';
import { UserDto } from '../dtos/user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UserMapper } from '../mappers/UserMapper';
import { UsersMapper } from '../mappers/UsersMapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async exists(email: string) {
    const userExists = await this.prismaService.user.findUnique({
      where: { email },
    });

    return !!userExists;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
      include: {
        address: true,
      },
    });

    if (!user) return null;

    return new UserMapper(user).toDomain();
  }

  async findById(id: string | number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: Number(id) },
      include: {
        address: true,
      },
    });

    if (!user) return null;

    return new UserMapper(user).toDomain();
  }

  async findAll() {
    const users = await this.prismaService.user.findMany({});
    return new UsersMapper(users).toDomain();
  }

  async save(id: number, data: UserDto) {
    const updatedUser = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        email: data.email,
        password: data.password,
        role: data.role,
        name: data.name,
        address: {
          create: data.address,
        },
      },
      include: {
        address: true,
      },
    });

    return new UserMapper(updatedUser).toDomain();
  }

  async create(data: CreateUserDto) {
    const createdUser = await this.prismaService.user.create({
      data: {
        email: data.email,
        password: data.password,
        role: data.role,
        name: data.name,
        address: {
          create: data.address,
        },
      },
      include: {
        address: true,
      },
    });

    return new UserMapper(createdUser).toDomain();
  }

  async delete(id: number | string) {
    await this.prismaService.user.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
