import { AuthorizationStatusType } from '../types/auth';
import { CityType } from '../types/city';
import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_ACTIVE_CITY, DEFAULT_ACTIVE_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE } from '../const';
import { loadOffers, requireAuthorization, setCityTab, setError, setOffers, setOffersSortType } from './action';
import { OffersType, OfferType } from '../types/offers';
import { OffersSortTypeKey } from '../types/offers-sort';

type InitialStateType = {
  authorizationStatus: AuthorizationStatusType;
  activeCity: CityType;
  activeOffer: OfferType | undefined;
  activeCityTab: CityTabType;
  error: string;
  isDataLoaded: boolean;
  offers: OffersType;
  filteredOffers: OffersType;
  offersSortType: OffersSortTypeKey;
};

const initialState: InitialStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: DEFAULT_ACTIVE_CITY,
  activeOffer: undefined,
  activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
  error: '',
  isDataLoaded: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
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
      state.offers = action.payload.sortedOffers;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
