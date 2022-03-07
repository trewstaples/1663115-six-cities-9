export type OwnerInfo = {
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

export const offers: Offer[] = [
  {
    photo: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    title: 'Beautiful & luxurious apartment at great location',
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: 'Premium',
    type: 'Apartment',
    rating: 5,
    bedrooms: 3,
    guests: 4,
    price: 120,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine', 'Heating', 'Coffee Machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: 'Pro',
    },
  },
];
