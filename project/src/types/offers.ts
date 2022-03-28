import { LocationType } from './location';
import { CityType } from './city';

type HostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type OfferType = {
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: HostType;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersType = OfferType[];
