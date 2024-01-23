import { IsEmpty, IsOptional } from 'class-validator';
import { UserDto } from './user.dto';
import { Role } from '@prisma/client';

export class UpdateUserDto extends UserDto {
  @IsEmpty()
  id: number;

  @IsOptional()
  password: string;

  @IsOptional()
  email: string;

  @IsEmpty()
  role: Role;

  @IsEmpty()
  createdAt: Date;

  @IsEmpty()
  updatedAt: Date;
}
