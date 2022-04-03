import { NewReviewSendStatus } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import { ReviewsType } from '../../types/reviews';
import { StateType } from '../../types/state';

export const getReviews = (state: StateType): ReviewsType => state.OfferItem.reviews;

export const getNewReviewSendStatus = (state: StateType): NewReviewSendStatus => state.OfferItem.newReviewSendStatus;

export const getOffer = (state: StateType): OfferType | null => state.OfferItem.offerItem;

export const getOffersNearby = (state: StateType): OffersType => state.OfferItem.offersNearby;
