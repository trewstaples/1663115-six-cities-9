type OwnerInfo = {
  avatar: string;
  name: string;
  pro: string;
};

export type OfferType = {
  photo: string[];
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
