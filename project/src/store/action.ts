import { createAction } from '@reduxjs/toolkit';
import { CityTabType } from '../types/city-tab';
import { OffersSortTypeKey } from '../types/offers-sort';

export const setCityTab = createAction<{ cityTab: CityTabType }>('city/setCityTab');

export const setOffersSortType = createAction<{ offersSortType: OffersSortTypeKey }>('offers/setOffersSortType');
