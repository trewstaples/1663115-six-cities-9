import browserHistory from '../../services/browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'game/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
