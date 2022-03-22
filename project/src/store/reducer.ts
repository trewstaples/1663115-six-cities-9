import { CityTabType } from '../types/city-tab';
import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_TAB } from '../const';
import { resetCityTab, setCityTab } from './action';

type InitialStateType = {
  cityTab: CityTabType;
};

const initialState: InitialStateType = {
  cityTab: DEFAULT_CITY_TAB,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCityTab, (state) => {
      state.cityTab = DEFAULT_CITY_TAB;
    })
    .addCase(setCityTab, (state, action) => {
      const { cityTab } = action.payload;
      state.cityTab = cityTab;
    });
});

export { reducer };
