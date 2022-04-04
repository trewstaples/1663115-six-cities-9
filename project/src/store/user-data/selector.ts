import { AuthorizationStatus } from '../../const';
import { StateType, UserType } from '../../types/state';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state.User.authorizationStatus;

export const getIsUserAuthorized = (state: StateType): boolean => state.User.authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: StateType): UserType => state.User.user;

export const getError = (state: StateType): string => state.User.error;
