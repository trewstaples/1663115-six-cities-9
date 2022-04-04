import OfferReviewItem from '../offer-review-item/offer-review-item';
import { ReviewsType } from '../../../types/reviews';
import { sortReviewsByDateDown } from '../../../utils/reviews';

const REVIEWS_MAX_COUNT = 10;

type OfferReviewsPropsType = {
  reviews: ReviewsType;
  reviewsForm?: JSX.Element;
};

function OfferReviews({ reviews, reviewsForm }: OfferReviewsPropsType): JSX.Element {
  const sortedReviews = reviews.slice(0, REVIEWS_MAX_COUNT).sort(sortReviewsByDateDown);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((sortedReview) => (
          <li className="reviews__item" key={sortedReview.id}>
            <OfferReviewItem review={sortedReview} />
          </li>
        ))}
      </ul>
      {reviewsForm}
    </section>
  );
}

export default OfferReviews;
