import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { offers } from './mocks/offers-mocks';

const Setting = {
  PLACES_COUNT: 1000,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={Setting.PLACES_COUNT} offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'),
);
