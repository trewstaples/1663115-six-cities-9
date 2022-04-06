import { AuthorizationStatus, NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProcessType, UserType } from '../../types/state';

export const initialUser = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: '',
  user: initialUser,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialUser;
    },
  },
});

export const { requireAuthorization, setError, setUser, resetUser } = userProcess.actions;
