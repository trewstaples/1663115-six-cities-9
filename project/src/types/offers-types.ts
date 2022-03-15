type Coordinates = {
  lat: number;
  lng: number;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

type OwnerInfo = {
  avatar: string;
  name: string;
  pro: string;
};

export type OfferType = {
  id: number;
  coordinates: Coordinates;
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
  owner: OwnerInfo;
};

export type Offers = OfferType[];

type ReviewInfo = {
  avatar: string;
  name: string;
  rating: number;
  date: Date;
  text: string;
};

export type Reviews = ReviewInfo[];
