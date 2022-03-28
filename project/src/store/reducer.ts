import { AuthorizationStatusType } from '../types/auth';
import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE } from '../const';
import { loadOffers, requireAuthorization, setCityTab, setError, setOffers, setOffersSortType } from './action';
import { OffersType } from '../types/offers';
import { OffersSortTypeKey } from '../types/offers-sort';

type InitialStateType = {
  authorizationStatus: AuthorizationStatusType;
  cityTab: CityTabType;
  error: string;
  isDataLoaded: boolean;
  offers: OffersType;
  offersSortType: OffersSortTypeKey;
};

const initialState: InitialStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  cityTab: DEFAULT_CITY_TAB,
  error: '',
  isDataLoaded: false,
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCityTab, (state, action) => {
      const { cityTab } = action.payload;
      state.cityTab = cityTab;
    })
    .addCase(setOffersSortType, (state, action) => {
      state.offersSortType = action.payload.offersSortType;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.sortedOffers;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
