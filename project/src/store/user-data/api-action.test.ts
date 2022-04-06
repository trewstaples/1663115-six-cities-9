import { Action } from 'redux';
import { APIRoute } from '../../const';
import { checkAuthAction, loginAction } from './api-action';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import { requireAuthorization } from './user-process';
import { StateType } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AuthData } from '../../types/auth';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<StateType, Action, ThunkDispatch<StateType, typeof api, Action>>(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI.onGet(APIRoute.Login).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: 'test123456' };

    mockAPI.onPost(APIRoute.Login).reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });
});
