import { loadOfferItem, loadOffersNearby, loadReviews, setNewReviewSendStatus, offerItemData } from './offer-item-data';
import { makeFakeOffer, makeFakeOffers } from '../../utils/mocks/make-fake-offer';
import { makeFakeReviews } from '../../utils/mocks/make-fake-review';
import { NewReviewSendStatus } from '../../const';
import { OfferItemDataType } from '../../types/state';

const fakeOfferItemInitialState: OfferItemDataType = {
  newReviewSendStatus: NewReviewSendStatus.NotSend,
  offerItem: null,
  offersNearby: [],
  reviews: [],
};

const fakeOfferItem = makeFakeOffer();
const fakeOffersNearby = makeFakeOffers();
const fakeReviews = makeFakeReviews();

describe('offerItemReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerItemData.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(fakeOfferItemInitialState);
  });

  it('should set new review send status', () => {
    expect(offerItemData.reducer(fakeOfferItemInitialState, setNewReviewSendStatus(NewReviewSendStatus.Success))).toEqual({
      NewReviewSendStatus: NewReviewSendStatus.Success,
      offerItem: null,
      offersNearby: [],
      reviews: [],
    });
  });

  it('should load offer item', () => {
    expect(offerItemData.reducer(fakeOfferItemInitialState, loadOfferItem(fakeOfferItem))).toEqual({
      newReviewSendStatus: NewReviewSendStatus.NotSend,
      offerItem: fakeOfferItem,
      offersNearby: [],
      reviews: [],
    });
  });

  it('should load offers nearby', () => {
    expect(offerItemData.reducer(fakeOfferItemInitialState, loadOffersNearby(fakeOffersNearby))).toEqual({
      newReviewSendStatus: NewReviewSendStatus.NotSend,
      offerItem: null,
      offersNearby: fakeOffersNearby,
      reviews: [],
    });
  });

  it('should load reviews', () => {
    expect(offerItemData.reducer(fakeOfferItemInitialState, loadReviews(fakeReviews))).toEqual({
      newReviewSendStatus: NewReviewSendStatus.NotSend,
      offerItem: null,
      offersNearby: [],
      reviews: fakeReviews,
    });
  });
});
