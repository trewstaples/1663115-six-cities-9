import { APIRoute } from '../../const';
import { api, store } from '..';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandle } from '../../services/error-handle';
import { OffersType } from '../../types/offers';
import { loadFavoriteOffers, loadOffers } from './action';

export const fetchOfferAction = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchFavoriteOffersAction = createAsyncThunk('data/fetchFavoriteOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Favorite);
    store.dispatch(loadFavoriteOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});
