import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerError extends HttpException {
  constructor(message = 'Internal server error.') {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
