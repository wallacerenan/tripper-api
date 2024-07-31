import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { PlaceAutocompleteType } from '@googlemaps/google-maps-services-js';
import { Transform } from 'class-transformer';
import { toArray, toBoolean, toNumber } from '@/core/infra/transformers';

export class AutocompleteDto {
  @IsNotEmpty()
  input: string;

  @IsOptional()
  sessiontoken?: string | undefined;

  @Transform(toNumber)
  @IsOptional()
  offset?: number | undefined;

  @IsOptional()
  origin?: string | undefined;

  @IsOptional()
  location?: string | undefined;

  @Transform(toNumber)
  @IsOptional()
  @IsNumber()
  radius?: number | undefined;

  @IsOptional()
  language?: string | undefined;

  @IsOptional()
  @IsEnum(PlaceAutocompleteType)
  types?: PlaceAutocompleteType | undefined;

  @Transform(toArray)
  @IsOptional()
  @IsArray({})
  components?: string[] | undefined;

  @Transform(toBoolean)
  @IsOptional()
  @IsBoolean()
  strictbounds?: boolean | undefined;
}
