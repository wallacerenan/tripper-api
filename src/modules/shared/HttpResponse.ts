import { HttpException } from '@nestjs/common';

export type HttpResponse<T> = {
  statusCode: number;
  data: T;
};

export function ok<T = any>(dto?: any): HttpResponse<T> {
  return {
    statusCode: 200,
    data: dto,
  };
}

export function created(): HttpResponse<undefined> {
  return {
    statusCode: 201,
    data: undefined,
  };
}

export function clientError(error: string): HttpException {
  return new HttpException(error, 400);
}

export function unauthorized(error: string): HttpException {
  return new HttpException(error, 400);
}

export function forbidden(error: string): HttpException {
  return new HttpException(error, 403);
}

export function notFound(error: string): HttpException {
  return new HttpException(error, 404);
}

export function conflict(error: string): HttpException {
  return new HttpException(error, 409);
}

export function tooMany(error: string): HttpException {
  return new HttpException(error, 429);
}

export function fail(error: string): HttpException {
  return new HttpException(error, 500);
}
