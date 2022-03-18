import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { offersAmsterdam } from './mocks/offers-mocks';
import { CITY } from './mocks/city';

const Setting = {
  PLACES_COUNT: 1000,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={Setting.PLACES_COUNT} offers={offersAmsterdam} city={CITY} />
  </React.StrictMode>,
  document.getElementById('root'),
);
