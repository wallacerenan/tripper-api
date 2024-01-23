import { User } from '@prisma/client';

import omit from 'lodash/omit';

export class UserMapper {
  constructor(private readonly user: User) {}

  public toDomain() {
    return omit(this.user, ['password']) as User;
  }

  public fromDomain() {
    return this.user as User;
  }
}
