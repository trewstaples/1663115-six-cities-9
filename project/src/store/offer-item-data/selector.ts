import { NewReviewSendStatus } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import { ReviewsType } from '../../types/reviews';
import { StateType } from '../../types/state';

export const getReviews = (state: StateType): ReviewsType => state.OFFER_ITEM.reviews;

export const getNewReviewSendStatus = (state: StateType): NewReviewSendStatus => state.OFFER_ITEM.newReviewSendStatus;

export const getOffer = (state: StateType): OfferType | null => state.OFFER_ITEM.offerItem;

export const getOffersNearby = (state: StateType): OffersType => state.OFFER_ITEM.offersNearby;
