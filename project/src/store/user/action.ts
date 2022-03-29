import { AuthorizationStatus, AppRoute } from '../../const';
import { createAction } from '@reduxjs/toolkit';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setError = createAction<string>('game/setError');
