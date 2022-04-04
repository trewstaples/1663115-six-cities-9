import { AuthorizationStatusType } from './auth';
import { CityType } from './city';
import { CityTabType } from './city-tab';
import { NewReviewSendStatus } from '../const';
import { OffersType, OfferType } from './offers';
import { OffersSortTypeKey } from './offers-sort';
import { ReviewsType } from './reviews';
import { store } from '../store';

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type FavoritesDataType = {
  favoriteOffers: OffersType;
};

export type OfferItemDataType = {
  newReviewSendStatus: NewReviewSendStatus;
  offerItem: OfferType | null;
  offersNearby: OffersType;
  reviews: ReviewsType;
};

export type OffersDataType = {
  activeCity: CityType;
  activeCityTab: CityTabType;
  filteredOffers: OffersType;
  isDataLoaded: boolean;
  offers: OffersType;
  offersSortType: OffersSortTypeKey;
};

export type UserType = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type UserProcessType = {
  authorizationStatus: AuthorizationStatusType;
  error: string;
  user: UserType;
};
