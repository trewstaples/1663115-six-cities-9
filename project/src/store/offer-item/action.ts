import { createAction } from '@reduxjs/toolkit';
import { NewReviewSendStatus } from '../../const';
import { CommentsType } from '../../types/comments';
import { NewCommentType } from '../../types/new-comment';
import { OfferType, OffersType } from '../../types/offers';

export const loadOfferItem = createAction<OfferType>('data/loadOfferItem');

export const loadOffersNearby = createAction<OffersType>('data/loadOffersNearby');

export const loadComments = createAction<CommentsType>('data/loadComments');

export const postNewComment = createAction<NewCommentType>('data/postNewComment');

export const setNewReviewSendStatus = createAction<NewReviewSendStatus>('offer/setNewReviewSendStatus');
