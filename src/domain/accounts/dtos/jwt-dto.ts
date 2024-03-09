import { IsNotEmpty, IsString } from 'class-validator';

export class JwtDto {
  @IsNotEmpty()
  @IsString()
  readonly accessToken: string;

  @IsNotEmpty()
  @IsString()
  readonly refreshToken: string;
}
