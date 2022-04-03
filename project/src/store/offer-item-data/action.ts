import { createAction } from '@reduxjs/toolkit';
import { NewReviewSendStatus } from '../../const';
import { ReviewsType } from '../../types/reviews';
import { OfferType, OffersType } from '../../types/offers';

export const loadOfferItem = createAction<OfferType>('data/loadOfferItem');

export const loadOffersNearby = createAction<OffersType>('data/loadOffersNearby');

export const loadReviews = createAction<ReviewsType>('data/loadReviews');

export const setNewReviewSendStatus = createAction<NewReviewSendStatus>('data/setNewReviewSendStatus');
