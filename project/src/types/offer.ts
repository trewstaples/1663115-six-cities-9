type OwnerInfo = {
  avatar: string;
  name: string;
  pro: string;
};

export type Offer = {
  photo: string[];
  title: string;
  description: string;
  premium: string;
  type: string;
  rating: number;
  bedrooms: number;
  guests: number;
  price: number;
  features: string[];
  owner: OwnerInfo;
};

export type Offers = Offer[];
