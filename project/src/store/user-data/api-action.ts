import { AxiosInstance } from 'axios';
import { AppDispatchType, StateType } from '../../types/state';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { AuthData } from '../../types/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { requireAuthorization, setError, setUser, resetUser } from './user-process';
import { saveToken, dropToken } from '../../services/token';

export const clearErrorAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/clearError', (_arg, { dispatch }) => {
  setTimeout(() => dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (error) {
    errorHandle(error);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post(APIRoute.Login, { email, password });
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(resetUser);
  } catch (error) {
    errorHandle(error);
  }
});
