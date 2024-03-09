import {
  GeocodeRequest,
  GeocodeResponse,
  PlaceAutocompleteResponse,
  PlaceDetailsRequest,
  PlaceDetailsResponse,
} from '@googlemaps/google-maps-services-js';
import { AutocompleteDto } from '../dtos/autocomplete.dto';

export interface LatLng {
  lat: number;
  lng: number;
}

export type PlaceDetailsParams = PlaceDetailsRequest['params'];
export type GeocodeParams = GeocodeRequest['params'];

export interface IMapsRepository {
  placeAutocomplete(
    autocompleteDto: AutocompleteDto,
  ): Promise<PlaceAutocompleteResponse['data']>;
  placeDetails(
    params: PlaceDetailsParams,
  ): Promise<PlaceDetailsResponse['data']>;
  geocode(params: GeocodeParams): Promise<GeocodeResponse['data']>;
}
