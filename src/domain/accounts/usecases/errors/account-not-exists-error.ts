import { NotFoundException } from '@nestjs/common';

export class AccountNotExistsError extends NotFoundException {
  constructor(email: string) {
    super(`The email "${email}" is already registered.`);
  }
}
