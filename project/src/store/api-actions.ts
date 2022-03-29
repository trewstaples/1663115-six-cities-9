/* eslint-disable no-console */
import { api, store } from '.';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { loadOfferItem, loadOffers, requireAuthorization, setError } from './action';
import { OffersType, OfferType } from '../types/offers';
import { UserData } from '../types/user-data';

export const clearErrorAction = createAsyncThunk('game/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    console.log(data);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchOfferItemAction = createAsyncThunk('data/fetchOfferItem', async (offerId: number) => {
  try {
    const { data } = await api.get<OfferType>(`/hotels/${offerId}`);
    console.log(data);
    store.dispatch(loadOfferItem(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  try {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch (error) {
    errorHandle(error);
  }
});
