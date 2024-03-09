import { AsyncMaybe } from '@/core/logic/maybe';
import { RegisterUserDto } from '@/domain/accounts/dtos/register-user.dto';
import { User } from '@/domain/accounts/entities/user.entity';

export abstract class UsersRepository {
  abstract findById(id: number): AsyncMaybe<User>;
  abstract findByEmail(email: string): AsyncMaybe<User>;
  abstract create(user: RegisterUserDto): AsyncMaybe<User>;
}
