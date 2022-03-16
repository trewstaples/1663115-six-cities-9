import { Reviews } from '../../types/offers-types';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsListPropsType = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewsListPropsType): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review, id) => {
          const keyValue = `${id}-${review.name}`;
          return (
            <li key={keyValue} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">{review.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: `${Math.round(review.rating) * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{review.text}</p>
                <time className="reviews__time" dateTime={review.date.toString()}>
                  {review.date.toLocaleString('en', { month: 'long' })} {review.date.toLocaleString('en', { year: 'numeric' })}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewsList;
