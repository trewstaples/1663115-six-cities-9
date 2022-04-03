import { AuthorizationStatus } from '../../const';
import { StateType } from '../../types/state';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state.USER.authorizationStatus;

export const getIsUserAuthorized = (state: StateType): boolean => state.USER.authorizationStatus === AuthorizationStatus.Auth;
