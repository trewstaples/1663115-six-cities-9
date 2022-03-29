import { AuthorizationStatus } from '../const';
import { CityTabType } from '../types/city-tab';
import { createAction } from '@reduxjs/toolkit';
import { OffersType, OfferType } from '../types/offers';
import { OffersSortTypeKey } from '../types/offers-sort';

export const loadOffers = createAction<OffersType>('data/loadOffers');

export const loadOfferItem = createAction<OfferType>('data/loadOfferItem');

export const loadOffersNearby = createAction<OffersType>('data/loadOffersNearby');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setCityTab = createAction<{ cityTab: CityTabType }>('city/setCityTab');

export const setOffersSortType = createAction<{ offersSortType: OffersSortTypeKey }>('offers/setOffersSortType');

export const setOffers = createAction<{ sortedOffers: OffersType }>('offers/ setOffers ');

export const setError = createAction<string>('game/setError');
