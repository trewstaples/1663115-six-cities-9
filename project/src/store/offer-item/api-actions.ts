import { AppRoute, NewReviewSendStatus } from '../../const';
import { api, store } from '..';
import { CommentsType } from '../../types/comments';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from '../../services/error-handle';
import { OfferType, OffersType } from '../../types/offers';
import { redirectToRoute } from '../user/action';
import { loadOfferItem, loadOffersNearby, loadComments, setNewReviewSendStatus } from './action';
import { NewCommentType } from '../../types/new-comment';

export const fetchOfferItemAction = createAsyncThunk('data/fetchOfferItem', async (offerId: number) => {
  try {
    const { data } = await api.get<OfferType>(`/hotels/${offerId}`);
    store.dispatch(loadOfferItem(data));
  } catch (error) {
    store.dispatch(redirectToRoute(AppRoute.NotFound));
    errorHandle(error);
  }
});

export const fetchOffersNearbyAction = createAsyncThunk('data/fetchOffersNearby', async (offerId: number) => {
  try {
    const { data } = await api.get<OffersType>(`/hotels/${offerId}/nearby`);
    store.dispatch(loadOffersNearby(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchCommentsAction = createAsyncThunk('data/fetchCommentsAction', async (offerId: number) => {
  try {
    const { data } = await api.get<CommentsType>(`/comments/${offerId}`);
    store.dispatch(loadComments(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchNewCommentAction = createAsyncThunk('data/newCommentAction', async (newComment: NewCommentType) => {
  try {
    const { offerId, comment, rating } = newComment;
    await api.post(`/comments/${offerId}`, { comment, rating });
    store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Success));
  } catch (error) {
    errorHandle(error);
    store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Error));
  }
});
