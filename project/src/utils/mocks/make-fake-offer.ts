import { datatype, internet, lorem } from 'faker';
import { makeFakeCity } from './make-fake-city';
import { makeFakeLocation } from './make-fake-location';
import { makeFakeUser } from './make-fake-user';
import { OffersType, OfferType } from '../../types/offers';

enum FakeConstants {
  BedroomsMaxNumber = 8,
  DescriptionSentenceNumber = 3,
  FavoriteOffersNumber = 4,
  ImagesNumber = 5,
  GoodsNumber = 7,
  OffersNumber = 10,
  OffersNearbyNumber = 3,
  RatingMaxValue = 5,
}

export const makeFakeOffer = (): OfferType => ({
  bedrooms: datatype.number(FakeConstants.BedroomsMaxNumber),
  city: makeFakeCity(),
  description: lorem.paragraph(FakeConstants.DescriptionSentenceNumber),
  host: makeFakeUser(),
  id: datatype.number(),
  images: Array(FakeConstants.ImagesNumber).fill(internet.avatar()),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  goods: Array(FakeConstants.GoodsNumber).fill(lorem.word()),
  location: makeFakeLocation(),
  rating: datatype.number(FakeConstants.RatingMaxValue),
  maxAdults: datatype.number(),
  previewImage: internet.avatar(),
  price: datatype.number(),
  title: lorem.sentence(),
  type: lorem.word(),
});

export const makeFakeOffers = (): OffersType => new Array(FakeConstants.OffersNumber).fill(null).map(() => makeFakeOffer());

export const makeFakeOffersNearby = (): OffersType => new Array(FakeConstants.OffersNearbyNumber).fill(null).map(() => makeFakeOffer());
