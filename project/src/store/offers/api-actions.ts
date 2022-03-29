import { APIRoute } from '../../const';
import { api, store } from '..';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandle } from '../../services/error-handle';
import { OffersType } from '../../types/offers';
import { loadOffers } from './action';

export const fetchOfferAction = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    // eslint-disable-next-line no-console
    console.log(data);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});
