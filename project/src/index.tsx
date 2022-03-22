import App from './components/app/app';
import { Amsterdam } from './mocks/city';
import { fullOffers } from './mocks/offers-mocks';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={fullOffers} city={Amsterdam} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
