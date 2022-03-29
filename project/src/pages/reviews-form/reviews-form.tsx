import { fetchNewCommentAction } from '../../store/offer-item/api-actions';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

type ReviewsFormPropsType = {
  offerId: number;
};

function ReviewsForm({ offerId }: ReviewsFormPropsType): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const dispatch = useDispatch();

  const handleReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      fetchNewCommentAction({
        offerId,
        comment,
        rating,
      }),
    );
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const ratingValues = [
    {
      value: '5',
      title: 'perfect',
    },
    {
      value: '4',
      title: 'good',
    },
    {
      value: '3',
      title: 'not bad',
    },
    {
      value: '2',
      title: 'badly',
    },
    {
      value: '1',
      title: 'terribly',
    },
  ];

  return (
    <form onSubmit={handleReviewFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.map((ratingValue) => (
          <>
            <input onChange={handleRatingChange} className="form__rating-input visually-hidden" name="rating" value={ratingValue.value} id={`${ratingValue.value} stars`} type="radio" />
            <label htmlFor={`${ratingValue.value} stars`} className="reviews__rating-label form__rating-label" title={ratingValue.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea onChange={handleCommentChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
