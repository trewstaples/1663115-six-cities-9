import { dateFormat } from '../../../utils/date-format';
import { ReviewType } from '../../../types/reviews';
import { getRating } from '../../../utils/offer-item';

type ReviewItemPropsType = {
  review: ReviewType;
};

function OfferReviewItem({ review }: ReviewItemPropsType): JSX.Element {
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRating(review.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date.toString()}>
          {dateFormat(review.date)}
        </time>
      </div>
    </>
  );
}

export default OfferReviewItem;
