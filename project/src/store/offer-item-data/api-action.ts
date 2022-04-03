import { api, store } from '..';
import { AppRoute, NewReviewSendStatus } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { loadOfferItem, loadOffersNearby, loadReviews, setNewReviewSendStatus } from './offer-item-data';
import { NewCommentType } from '../../types/new-comment';
import { OfferType, OffersType } from '../../types/offers';
import { redirectToRoute } from '../user-data/action';
import { ReviewsType } from '../../types/reviews';

export const loadOfferItemAction = createAsyncThunk('offerItem/loadOfferItem', async (offerId: number) => {
  try {
    const { data } = await api.get<OfferType>(`/hotels/${offerId}`);
    store.dispatch(loadOfferItem(data));
  } catch (error) {
    errorHandle(error);
    store.dispatch(redirectToRoute(AppRoute.NotFound));
  }
});

export const loadOffersNearbyAction = createAsyncThunk('offerItem/loadOffersNearby', async (offerId: number) => {
  try {
    const { data } = await api.get<OffersType>(`/hotels/${offerId}/nearby`);
    store.dispatch(loadOffersNearby(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const loadReviewsAction = createAsyncThunk('offerItem/loadReviews', async (offerId: number) => {
  try {
    const { data } = await api.get<ReviewsType>(`/comments/${offerId}`);
    store.dispatch(loadReviews(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const setNewReviewAction = createAsyncThunk('offerItem/setNewReview', async (newComment: NewCommentType) => {
  try {
    const { offerId, comment, rating } = newComment;
    await api.post(`/comments/${offerId}`, { comment, rating });
    store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Success));
  } catch (error) {
    errorHandle(error);
    store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Error));
  }
});

export const loadOfferDataAction = (id?: number) => {
  if (!id) {
    id = store.getState().OfferItem.offerItem?.id;

    if (typeof id === 'undefined') {
      return;
    }
  }

  store.dispatch(loadOfferItemAction(id));
  store.dispatch(loadReviewsAction(id));
  store.dispatch(loadOffersNearbyAction(id));
};
