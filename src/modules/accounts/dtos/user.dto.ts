import { Role } from '@prisma/client';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
import { AddressDto } from './adress.dto';

export class UserDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  address?: AddressDto;
}
