import App from './components/app/app';
import { checkAuthAction } from './store/user-data/api-action';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers-data/api-action';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//чекнуть HistoryRouter

//Пройтись по критериям, отрефакторить код, вынести повторяющияйся код в функции
