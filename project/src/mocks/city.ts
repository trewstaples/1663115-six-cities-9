import { City } from '../types/offers-types';

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityCodes = Object.keys(Cities);

export const Paris: City = {
  title: 'Paris',
  lat: 48.8534,
  lng: 2.3488,
  zoom: 10,
};

export const Cologne: City = {
  title: 'Cologne',
  lat: 50.9333,
  lng: 6.95,
  zoom: 10,
};

export const Brussels: City = {
  title: 'Brussels',
  lat: 50.8504,
  lng: 4.34878,
  zoom: 10,
};

export const Amsterdam: City = {
  title: 'Amsterdam',
  lat: 52.374,
  lng: 4.88969,
  zoom: 10,
};

export const Hamburg: City = {
  title: 'Hamburg',
  lat: 53.5753,
  lng: 10.0153,
  zoom: 10,
};

export const Dusseldorf: City = {
  title: 'Dusseldorf',
  lat: 51.2217,
  lng: 6.77616,
  zoom: 10,
};
