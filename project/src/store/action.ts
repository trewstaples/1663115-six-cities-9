import { createAction } from '@reduxjs/toolkit';
import { CityTabType } from '../types/city-tab';

export const resetCityTab = createAction('city/resetCityTab');

export const setCityTab = createAction<{ cityTab: CityTabType }>('city/setCityTab');
