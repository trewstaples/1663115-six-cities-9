import { createAction } from '@reduxjs/toolkit';
import { CityTabType } from '../../types/city-tab';
import { OffersType } from '../../types/offers';
import { OffersSortTypeKey } from '../../types/offers-sort';

export const loadOffers = createAction<OffersType>('data/loadOffers');

export const setOffersSortType = createAction<{ offersSortType: OffersSortTypeKey }>('offers/setOffersSortType');

export const setOffers = createAction<{ sortedOffers: OffersType }>('offers/ setOffers ');

export const setCityTab = createAction<{ cityTab: CityTabType }>('city/setCityTab');

export const loadFavoriteOffers = createAction<OffersType>('data/loadFavoritesOffers');
