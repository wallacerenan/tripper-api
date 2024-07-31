import { TransformFnParams } from 'class-transformer';

export function toLowerCase({ value }: TransformFnParams): string {
  return value.toLowerCase();
}

export function trim({ value }: TransformFnParams): string {
  return value.trim();
}

export function toDate({ value }: TransformFnParams): Date {
  return new Date(value);
}

export function toArray({ value }: TransformFnParams): string[] {
  return value.split(',');
}

export function toBoolean({ value }: TransformFnParams): boolean {
  value = value.toLowerCase();
  return value === 'true' || value === '1' ? true : false;
}

export function toNumber({ value }: TransformFnParams): number {
  return Number.parseInt(value, 10);
}
