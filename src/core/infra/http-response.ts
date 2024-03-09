import { HttpException, HttpStatus } from '@nestjs/common';

export type HttpResponse<T> = {
  statusCode: HttpStatus;
  data: T;
};

export function ok<T = any>(dto?: any): HttpResponse<T> {
  return {
    statusCode: HttpStatus.OK,
    data: dto,
  };
}

export function created(): HttpResponse<undefined> {
  return {
    statusCode: HttpStatus.CREATED,
    data: undefined,
  };
}

export function clientError(error: string): HttpException {
  return new HttpException(error, HttpStatus.BAD_REQUEST);
}

export function unauthorized(error: string): HttpException {
  return new HttpException(error, HttpStatus.UNAUTHORIZED);
}

export function forbidden(error: string): HttpException {
  return new HttpException(error, HttpStatus.FORBIDDEN);
}

export function notFound(error: string): HttpException {
  return new HttpException(error, HttpStatus.NOT_FOUND);
}

export function conflict(error: string): HttpException {
  return new HttpException(error, HttpStatus.CONFLICT);
}

export function tooMany(error: string): HttpException {
  return new HttpException(error, HttpStatus.TOO_MANY_REQUESTS);
}

export function fail(error: string): HttpException {
  return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
}
