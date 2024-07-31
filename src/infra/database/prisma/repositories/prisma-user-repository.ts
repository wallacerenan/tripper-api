import { RegisterUserDto } from '@/domain/accounts/dtos/register-user.dto';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@/domain/accounts/entities/user.entity';
import { UsersRepository } from '../../repositories/users-repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return new User(user);
  }

  async findById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new User(user);
  }

  async create(createUserDto: RegisterUserDto) {
    const user = await this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        role: createUserDto.role ?? 'USER',
        name: createUserDto.name,
      },
    });

    return new User(user);
  }
}
