import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { MapsRepository } from '../repositories/maps.repository';
import { AutocompleteDto } from '../dtos/autocomplete.dto';

@Controller('maps')
@UseInterceptors(ClassSerializerInterceptor)
export class MapsController {
  constructor(private readonly mapsRepository: MapsRepository) {}

  @Get('/autocomplete')
  async autocomplete(@Query() params: AutocompleteDto) {
    return this.mapsRepository.placeAutocomplete(params);
  }
}
