import { createReducer } from '@reduxjs/toolkit';
import { fillList } from './action';
import { offersAmsterdam, offersParis } from '../mocks/offers-mocks';
import { updateCity } from './action';

const initialState = {
  city: 'Amsterdam',
  offersList: offersAmsterdam,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCity, (state) => {
      state.city = 'Paris';
    })
    .addCase(fillList, (state) => {
      state.offersList = offersParis;
    });
});

export { reducer };
