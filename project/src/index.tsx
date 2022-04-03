import App from './components/app/app';
import { checkAuthAction } from './store/user-data/api-action';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers-data/api-action';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import HistoryRouter from './components/history-router';
import browserHistory from './services/browser-history';

store.dispatch(fetchOfferAction());
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

//чекнуть HistoryRouter

//Пройтись по критериям, отрефакторить код, вынести повторяющияйся код в функции
