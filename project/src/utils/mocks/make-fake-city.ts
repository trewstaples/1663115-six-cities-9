import { CityType } from '../../types/city';
import { DEFAULT_ACTIVE_CITY_TAB } from '../../const';
import { makeFakeLocation } from './make-fake-location';

export const makeFakeCity = (): CityType => ({
  name: DEFAULT_ACTIVE_CITY_TAB,
  location: makeFakeLocation(),
});
