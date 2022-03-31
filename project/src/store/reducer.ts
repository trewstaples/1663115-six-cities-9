import { AuthorizationStatusType } from '../types/auth';
import { CityType } from '../types/city';
import { CityTabType } from '../types/city-tab';
import { CommentsType } from '../types/comments';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_ACTIVE_CITY, DEFAULT_ACTIVE_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE, NewReviewSendStatus } from '../const';
import { OffersType, OfferType } from '../types/offers';
import { OffersSortTypeKey } from '../types/offers-sort';
import { loadComments, loadOfferItem, loadOffersNearby, setNewReviewSendStatus } from './offer-item/action';
import { loadOffers, setCityTab, setOffersSortType, setOffers } from './offers/action';
import { requireAuthorization, setError } from './user/action';

type InitialStateType = {
  authorizationStatus: AuthorizationStatusType;
  activeCity: CityType;
  comments: CommentsType;
  offerItem: OfferType | null;
  offersNearby: OffersType;
  activeCityTab: CityTabType;
  error: string;
  isDataLoaded: boolean;
  newReviewSendStatus: NewReviewSendStatus;
  offers: OffersType;
  filteredOffers: OffersType;
  offersSortType: OffersSortTypeKey;
};

const initialState: InitialStateType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  activeCity: DEFAULT_ACTIVE_CITY,
  comments: [],
  offerItem: null,
  offersNearby: [],
  activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
  error: '',
  isDataLoaded: false,
  newReviewSendStatus: NewReviewSendStatus.NotSend,
  offers: [],
  filteredOffers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.activeCityTab);
      state.activeCity = state.filteredOffers[0].city;
      state.isDataLoaded = true;
    })
    .addCase(loadOfferItem, (state, action) => {
      state.offerItem = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      // eslint-disable-next-line no-console
      console.log(state.authorizationStatus);
    })
    .addCase(setCityTab, (state, action) => {
      const { cityTab } = action.payload;
      state.activeCityTab = cityTab;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.activeCityTab);
      state.activeCity = state.filteredOffers[0].city;
    })
    .addCase(setOffersSortType, (state, action) => {
      state.offersSortType = action.payload.offersSortType;
    })
    .addCase(setOffers, (state, action) => {
      state.filteredOffers = action.payload.sortedOffers;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setNewReviewSendStatus, (state, action) => {
      state.newReviewSendStatus = action.payload;
    });
});

export { reducer };
