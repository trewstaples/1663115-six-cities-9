import App from './components/app/app';
import { CITY } from './mocks/city';
import { offersAmsterdam } from './mocks/offers-mocks';
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
      <App placesCount={Setting.PLACES_COUNT} offers={offersAmsterdam} city={CITY} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
