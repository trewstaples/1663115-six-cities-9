import { AuthorizationStatus } from '../../const';
import { StateType, UserType } from '../../types/state';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state.USER.authorizationStatus;

export const getIsUserAuthorized = (state: StateType): boolean => state.USER.authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: StateType): UserType => state.USER.user;

export const getError = (state: StateType): string => state.USER.error;
