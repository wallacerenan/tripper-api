import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { HttpResponse } from '@modules/shared/HttpResponse';

type Response<T = void> = T extends void
  ? Promise<T>
  : Promise<HttpResponse<T>>;

export interface IUserController {
  create(dto: CreateUserDto): Response<UserModel>;
  read(id: string): Response<UserModel | null>;
  update(id: string, dto: UpdateUserDto): Response<UserModel>;
  delete(id: string): Response;
  findAll(): Response<UserModel[]>;
}
