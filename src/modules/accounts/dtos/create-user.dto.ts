import { IsNotEmpty } from 'class-validator';
import { UserDto } from './user.dto';
import { Match } from '@modules/shared/decorators/Match';

export class CreateUserDto extends UserDto {
  @IsNotEmpty()
  @Match('password')
  password_confirm: string;
}
