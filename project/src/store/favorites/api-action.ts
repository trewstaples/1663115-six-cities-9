import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { FavoriteOfferStatusData } from '../../types/favorite';
import { OffersType } from '../../types/offers';
import { fetchOfferAction } from '../offers/api-actions';
import { loadFavoriteOffers } from './action';

export const fetchFavoriteOffersAction = createAsyncThunk('favorite/fetchFavoriteOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Favorite);
    store.dispatch(loadFavoriteOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchUpdateFavoriteAction = createAsyncThunk('favorite/fetchUpdateFavoriteAction', async ({ offerId, status }: FavoriteOfferStatusData) => {
  try {
    await api.post(`/favorite/${offerId}/${status}`);
    store.dispatch(fetchOfferAction());
    store.dispatch(fetchFavoriteOffersAction());
  } catch (error) {
    errorHandle(error);
  }
});
