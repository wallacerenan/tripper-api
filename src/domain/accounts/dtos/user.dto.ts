import { ApiProperty } from '@nestjs/swagger';

import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  Length,
  MinLength,
} from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  role: 'USER' | 'ADMIN' = 'ADMIN';

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
