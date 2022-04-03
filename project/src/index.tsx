import App from './components/app/app';
import { checkAuthAction } from './store/user-data/api-action';
import ErrorMessage from './components/error-message/error-message';
import { loadOffersAction } from './store/offers-data/api-action';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './services/browser-history';

store.dispatch(loadOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//export type ReviewsType = ReviewType[]; - Массивы названы существительными во множественном числе или с использованием венгерской нотации (указанием типа в названии)
