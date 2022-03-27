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
  images: string[];
  title: string;
  description: string;
  isPremium: string;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  isFavorite: boolean;
  goods: string[];
  host: OwnerType;
  city: CityType;
};

export type OffersType = OfferType[];
