import { Offers } from '../types/offers-types';

export const offers: Offers = [
  {
    id: 0,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    photos: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful & luxurious apartment at great location',
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: 'Premium',
    type: 'Apartment',
    rating: 5,
    bedrooms: 3,
    guests: 5,
    price: 120,
    favorites: true,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine', 'Heating', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: 'Pro',
    },
  },
  {
    id: 1,
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
    photos: ['img/room.jpg', 'img/studio-01.jpg'],
    title: 'Nice room at city',
    description: 'Nice place to stay and have a rest. Everying you need is there. We are happy to meet put guests',
    premium: '',
    type: 'Room',
    rating: 3.2,
    bedrooms: 1,
    guests: 2.3,
    price: 80,
    favorites: false,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Michael',
      pro: '',
    },
  },
  {
    id: 2,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
    photos: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    title: 'Cool room at city',
    description: 'Everying you need is there. We are happy to meet put guests. Nice place to stay and have a rest. ',
    premium: 'Premium',
    type: 'Room',
    rating: 4.4,
    bedrooms: 1,
    guests: 4,
    price: 100,
    favorites: true,
    features: ['Wi-Fi', 'Washing machine', 'Towel', 'Coffe Machine', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Peter',
      pro: 'Pro',
    },
  },
  {
    id: 3,
    coordinates: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
    photos: ['img/apartment-03.jpg', 'img/room.jpg'],
    title: 'Cool apartment',
    description: 'Everying you need is there. Nice place to stay and have a rest. We are happy to meet put guests',
    premium: '',
    type: 'Apartment',
    rating: 2.1,
    bedrooms: 2,
    guests: 4,
    price: 90,
    favorites: false,
    features: ['Wi-Fi', 'Cabel TV', 'Fridge'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Kevin',
      pro: '',
    },
  },
];
