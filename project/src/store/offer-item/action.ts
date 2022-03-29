import { createAction } from '@reduxjs/toolkit';
import { CommentsType } from '../../types/comments';
import { OfferType, OffersType } from '../../types/offers';

export const loadOfferItem = createAction<OfferType>('data/loadOfferItem');

export const loadOffersNearby = createAction<OffersType>('data/loadOffersNearby');

export const loadComments = createAction<CommentsType>('data/loadComments');
