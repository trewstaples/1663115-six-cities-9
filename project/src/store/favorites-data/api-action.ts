import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { FavoriteOfferStatusData } from '../../types/favorite';
import { OffersType } from '../../types/offers';
import { loadOfferDataAction } from '../offer-item-data/api-action';
import { loadOffersAction } from '../offers-data/api-action';
import { loadFavoriteOffers } from './favorites-data';

export const loadFavoritesOffersAction = createAsyncThunk('favorites/loadFavoritesOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Favorite);
    store.dispatch(loadFavoriteOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const updateFavoritesOffersAction = createAsyncThunk('favorites/updateFavoritesOffers', async ({ offerId, status }: FavoriteOfferStatusData) => {
  try {
    await api.post(`/favorite/${offerId}/${status}`);
    store.dispatch(loadOffersAction());
    store.dispatch(loadFavoritesOffersAction());
    loadOfferDataAction();
  } catch (error) {
    errorHandle(error);
  }
});
