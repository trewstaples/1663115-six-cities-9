import { AuthorizationStatus } from '../../const';
import { initialUser, requireAuthorization, resetUser, setError, setUser, userProcess } from './user-process';
import { makeFakeUser } from '../../utils/mocks/make-fake-user';
import { UserProcessType } from '../../types/state';

const fakeUserProcessInitialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: '',
  user: initialUser,
};

const fakeErrorMessage = 'Computer says no!';
const fakeUser = makeFakeUser();

describe('userProcessReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(fakeUserProcessInitialState);
  });

  it('should set authorization status', () => {
    expect(userProcess.reducer(fakeUserProcessInitialState, requireAuthorization(AuthorizationStatus.Auth))).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      error: '',
      user: initialUser,
    });
  });

  it('should set error', () => {
    expect(userProcess.reducer(fakeUserProcessInitialState, setError(fakeErrorMessage))).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      error: fakeErrorMessage,
      user: initialUser,
    });
  });

  it('should set user', () => {
    expect(userProcess.reducer(fakeUserProcessInitialState, setUser(fakeUser))).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      error: '',
      user: fakeUser,
    });
  });

  it('should reset user', () => {
    expect(userProcess.reducer(fakeUserProcessInitialState, resetUser)).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      error: '',
      user: initialUser,
    });
  });
});
