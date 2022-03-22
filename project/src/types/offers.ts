import { LocationType } from './location';

type OwnerType = {
  avatar: string;
  name: string;
  //id: number
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
  //city: City(name, location)
};

export type OffersType = OfferType[];
