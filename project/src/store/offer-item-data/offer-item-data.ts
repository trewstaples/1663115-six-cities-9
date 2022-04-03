import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, NewReviewSendStatus } from '../../const';
import { OfferItemDataType } from '../../types/state';

const initialState: OfferItemDataType = {
  newReviewSendStatus: NewReviewSendStatus.NotSend,
  offerItem: null,
  offersNearby: [],
  reviews: [],
};

export const offerItemData = createSlice({
  name: NameSpace.offerItem,
  initialState,
  reducers: {
    loadOfferItem: (state, action) => {
      state.offerItem = action.payload;
    },
    loadOffersNearby: (state, action) => {
      state.offersNearby = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setNewReviewSendStatus: (state, action) => {
      state.newReviewSendStatus = action.payload;
    },
  },
});

export const { loadOfferItem, loadOffersNearby, loadReviews, setNewReviewSendStatus } = offerItemData.actions;
