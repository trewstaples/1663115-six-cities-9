import { datatype } from 'faker';
import { LocationType } from '../../types/location';

export const makeFakeLocation = (): LocationType => ({
  latitude: datatype.number(),
  longitude: datatype.number(),
  zoom: datatype.number(),
});
