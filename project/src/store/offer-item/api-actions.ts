import { AppRoute } from '../../const';
import { api, store } from '..';
import { CommentsType } from '../../types/comments';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { OfferType, OffersType } from '../../types/offers';
import { redirectToRoute } from '../user/action';
import { loadOfferItem, loadOffersNearby, loadComments } from './action';

export const fetchOfferItemAction = createAsyncThunk('data/fetchOfferItem', async (offerId: number) => {
  try {
    const { data } = await api.get<OfferType>(`/hotels/${offerId}`);
    store.dispatch(loadOfferItem(data));
  } catch (error) {
    store.dispatch(redirectToRoute(AppRoute.NotFound));
    errorHandle(error);
  }
});

export const fetchOffersNearbyAction = createAsyncThunk('data/fetchOffersNearby', async (offerId: number) => {
  try {
    const { data } = await api.get<OffersType>(`/hotels/${offerId}/nearby`);
    store.dispatch(loadOffersNearby(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchCommentsAction = createAsyncThunk('data/fetchCommentsAction', async (offerId: number) => {
  try {
    const { data } = await api.get<CommentsType>(`/comments/${offerId}`);
    // eslint-disable-next-line no-console
    console.log(data);
    store.dispatch(loadComments(data));
  } catch (error) {
    errorHandle(error);
  }
});
