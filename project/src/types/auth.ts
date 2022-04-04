import { AuthorizationStatus } from '../const';

export type AuthorizationStatusType = AuthorizationStatus.Auth | AuthorizationStatus.NoAuth | AuthorizationStatus.Unknown;

export type AuthData = {
  email: string;
  password: string;
};
