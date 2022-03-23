import { OffersType, OfferType } from './types/offers';
import { OffersSortType } from './const';
import { OffersSortTypeKey } from './types/offers-sort';

export const sortOffersByPriceUp = (offerA: OfferType, offerB: OfferType): number => {
  const priceA = offerA.price;
  const priceB = offerB.price;

  return priceA - priceB;
};

export const sortOffersByPriceDown = (offerA: OfferType, offerB: OfferType): number => {
  const priceA = offerA.price;
  const priceB = offerB.price;

  return priceB - priceA;
};

export const sortOffersByRating = (offerA: OfferType, offerB: OfferType) => {
  const ratingA = offerA.rating;
  const ratingB = offerB.rating;

  return ratingB - ratingA;
};

export const sortOffersByType = (offersSortType: OffersSortTypeKey, offers: OffersType) => {
  const sortedOffers = offers.slice();

  switch (OffersSortType[offersSortType]) {
    case OffersSortType.PriceLowToHigh:
      sortedOffers.sort(sortOffersByPriceUp);
      break;
    case OffersSortType.PriceHighToLow:
      sortedOffers.sort(sortOffersByPriceDown);
      break;
    case OffersSortType.TopRatedFirst:
      sortedOffers.sort(sortOffersByRating);
      break;
    case OffersSortType.Popular:
      break;
  }
  return sortedOffers;
};
