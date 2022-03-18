import { createReducer } from '@reduxjs/toolkit';
import { offersAmsterdam, offersParis } from '../mocks/offers-mocks';

const UPDATE_CITY = 'UPDATE_STATE';

const initialState = {
  city: 'Amsterdam',
  offersList: offersAmsterdam,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(UPDATE_CITY, (state) => {
    state.city = 'Paris';
    state.offersList = offersParis;
  });
});

export { reducer };
