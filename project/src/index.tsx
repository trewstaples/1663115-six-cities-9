import App from './components/app/app';
import { Amsterdam } from './mocks/city';
import ErrorMessage from './components/error-message/error-message';
import { fullOffers } from './mocks/offers-mocks';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offers={fullOffers} city={Amsterdam} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//Настроиить навигацию в зависимости от статуса авторизации
