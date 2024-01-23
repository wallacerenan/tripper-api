import { IsInt, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class AddressDto {
  @IsInt()
  @IsOptional()
  readonly id: number;

  @Length(3, 100)
  @IsNotEmpty()
  readonly street: string;

  @IsNotEmpty()
  readonly number: string;

  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly neighborhood: string;

  @IsNotEmpty()
  readonly state: string;

  @IsOptional()
  readonly complement: string;

  @IsNotEmpty()
  readonly country: string;
}
