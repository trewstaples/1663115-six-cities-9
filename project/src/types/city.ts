import { LocationType } from './location';

export type CityType = {
  location: LocationType;
  name: string;
};

export type CitiesType = CityType[];
