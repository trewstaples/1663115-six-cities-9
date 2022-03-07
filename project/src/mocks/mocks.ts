import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    photo: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful & luxurious apartment at great location',
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: 'Premium',
    type: 'Apartment',
    rating: 5,
    bedrooms: 3,
    guests: 4,
    price: 120,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine', 'Heating', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: 'Pro',
    },
  },
  {
    photo: ['img/room.jpg', 'img/studio-01.jpg'],
    title: 'Nice room at city',
    description: 'Nice place to stay and have a rest. Everying you need is there. We are happy to meet put guests',
    premium: '',
    type: 'Room',
    rating: 3,
    bedrooms: 1,
    guests: 2,
    price: 80,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Michael',
      pro: '',
    },
  },
];
