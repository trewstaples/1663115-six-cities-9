import { createAction, createSlice } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { UserProcessType } from '../../types/state';

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { requireAuthorization, setError } = userProcess.actions;

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
