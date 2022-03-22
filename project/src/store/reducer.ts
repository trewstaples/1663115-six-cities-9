import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_TAB } from '../const';
import { setCityTab } from './action';
import { OffersType } from '../types/offers';
import { fullOffers } from '../mocks/offers-mocks';

const defaultOffers = fullOffers.filter((fullOffer) => fullOffer.city.title === DEFAULT_CITY_TAB);

type InitialStateType = {
  cityTab: CityTabType;
  offers: OffersType;
};

const initialState: InitialStateType = {
  cityTab: DEFAULT_CITY_TAB,
  offers: defaultOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCityTab, (state, action) => {
    const { cityTab } = action.payload;
    state.cityTab = cityTab;
    state.offers = fullOffers.filter((fullOffer) => fullOffer.city.title === cityTab);
  });
});

export { reducer };
