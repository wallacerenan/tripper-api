import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserDto } from '../dtos/user.dto';
import { User as UserModel } from '@prisma/client';

export abstract class UsersRepository {
  abstract exists(email: string): Promise<boolean>;
  abstract findByEmail(email: string): Promise<UserModel | null>;
  abstract findById(id: number): Promise<UserModel | null>;
  abstract findAll(): Promise<UserModel[]>;
  abstract save(id: number, user: UpdateUserDto): Promise<UserModel>;
  abstract create(user: UserDto): Promise<UserModel>;
  abstract delete(id: number): Promise<void>;
}
