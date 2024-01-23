import { User } from '@prisma/client';

import omit from 'lodash/omit';

export class UsersMapper {
  constructor(private readonly users: User[]) {}

  public toDomain() {
    return this.users.map(user => omit(user, ['password'])) as User[];
  }

  public fromDomain() {
    return this.users as User[];
  }
}
