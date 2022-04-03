import { createAction } from '@reduxjs/toolkit';
import { OffersType } from '../../types/offers';

export const loadFavoriteOffers = createAction<OffersType>('data/loadFavoritesOffers');
