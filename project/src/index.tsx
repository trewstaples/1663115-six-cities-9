import App from './components/app/app';
import { Amsterdam } from './mocks/city';
import { fullOffers } from './mocks/offers-mocks';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

const Setting = {
  PLACES_COUNT: 1000,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesCount={Setting.PLACES_COUNT} offers={fullOffers} city={Amsterdam} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
