import { LocationType } from './location';
import { CityType } from './city';

type OwnerType = {
  avatar: string;
  name: string;
  pro: string;
};

export type OfferType = {
  id: number;
  location: LocationType;
  photos: string[];
  title: string;
  description: string;
  premium: string;
  type: string;
  rating: number;
  bedrooms: number;
  guests: number;
  price: number;
  favorites: boolean;
  features: string[];
  owner: OwnerType;
  city: CityType;
};

export type OffersType = OfferType[];
