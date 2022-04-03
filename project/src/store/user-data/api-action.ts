import { AuthData } from '../../types/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { store, api } from '..';
import { saveToken, dropToken } from '../../services/token';
import { TIMEOUT_SHOW_ERROR, APIRoute, AuthorizationStatus } from '../../const';
import { setError, requireAuthorization, setUser, resetUser } from './user-process';

export const clearErrorAction = createAsyncThunk('user/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
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

export const loginAction = createAsyncThunk('user/login', async ({ email, password }: AuthData) => {
  try {
    const { data } = await api.post(APIRoute.Login, { email, password });
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(
      setUser({
        avatarUrl: data.avatarUrl,
        email: data.email,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      }),
    );
    saveToken(data.token);
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
    store.dispatch(resetUser);
  } catch (error) {
    errorHandle(error);
  }
});
