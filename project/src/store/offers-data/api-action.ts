import { APIRoute } from '../../const';
import { api, store } from '..';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { OffersType } from '../../types/offers';
import { loadOffers } from './offers-data';

export const loadOffersAction = createAsyncThunk('offers/loadOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});
