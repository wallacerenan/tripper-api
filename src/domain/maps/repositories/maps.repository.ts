import { Client, Language } from '@googlemaps/google-maps-services-js';
import {
  GeocodeParams,
  IMapsRepository,
  PlaceDetailsParams,
} from './IMapsRepository';
import { Injectable } from '@nestjs/common';
import { AutocompleteDto } from '../dtos/autocomplete.dto';

const defaultParams = {
  key: process.env.GOOGLE_MAPS_API_KEY || '',
  language: Language.pt_BR,
};

@Injectable()
export class MapsRepository implements IMapsRepository {
  client: Client;

  constructor() {
    this.client = new Client({});
  }

  async placeAutocomplete(autocompleteDto: AutocompleteDto) {
    const response = await this.client.placeAutocomplete({
      params: {
        ...defaultParams,
        ...autocompleteDto,
      },
    });

    return response.data;
  }

  async placeDetails(params: PlaceDetailsParams) {
    const response = await this.client.placeDetails({
      params: {
        ...defaultParams,
        ...params,
      },
    });

    return response.data;
  }

  async geocode(params: GeocodeParams) {
    const response = await this.client.geocode({
      params: {
        ...defaultParams,
        ...params,
      },
    });

    return response.data;
  }
}
