import { UserDto } from './user.dto';
import { Match } from '@/core/infra/decorators/match';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class RegisterUserDto extends OmitType(UserDto, [
  'createdAt',
  'updatedAt',
] as const) {
  @ApiProperty()
  @Match('password')
  password_confirm: string;
}
