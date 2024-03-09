import { BadRequestException } from '@nestjs/common';

export class AccountAlreadyExistsError extends BadRequestException {
  constructor(email: string) {
    super(`The email ${email} is already registered.`);
  }
}
