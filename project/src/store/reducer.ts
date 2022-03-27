import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE } from '../const';
import { fullOffers } from '../mocks/offers-mocks';
import { loadOffers, setCityTab, setOffers, setOffersSortType } from './action';
import { OffersType } from '../types/offers';
import { OffersSortTypeKey } from '../types/offers-sort';

const defaultOffers = fullOffers.filter((fullOffer) => fullOffer.city.title === DEFAULT_CITY_TAB);

type InitialStateType = {
  cityTab: CityTabType;
  offers: OffersType;
  offersSortType: OffersSortTypeKey;
};

const initialState: InitialStateType = {
  cityTab: DEFAULT_CITY_TAB,
  offers: defaultOffers,
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityTab, (state, action) => {
      const { cityTab } = action.payload;
      state.cityTab = cityTab;
      state.offers = fullOffers.filter((fullOffer) => fullOffer.city.title === cityTab);
    })
    .addCase(setOffersSortType, (state, action) => {
      state.offersSortType = action.payload.offersSortType;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.sortedOffers;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
