import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export type UserRole = 'USER' | 'ADMIN';

export class User {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @Length(3, 100)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Exclude()
  password: string;

  @ApiProperty()
  role: UserRole;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt: Date;

  constructor(inputs: Partial<User>) {
    Object.assign(this, {
      ...inputs,
      createdAt: new Date(inputs.createdAt!),
      updatedAt: new Date(inputs.updatedAt!),
    });
  }
}
