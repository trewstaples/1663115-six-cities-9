import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_TAB } from '../const';
import { resetCityTab, setCityTab } from './action';
import { OffersType } from '../types/offers';
import { offersAmsterdam, offersParis } from '../mocks/offers-mocks';

type InitialStateType = {
  cityTab: CityTabType;
  offers: OffersType;
};

const initialState: InitialStateType = {
  cityTab: DEFAULT_CITY_TAB,
  offers: offersAmsterdam,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCityTab, (state) => {
      state.cityTab = DEFAULT_CITY_TAB;
      state.offers = offersAmsterdam;
    })
    .addCase(setCityTab, (state, action) => {
      const { cityTab } = action.payload;
      state.cityTab = cityTab;
      state.offers = offersParis;
    });
});

export { reducer };
