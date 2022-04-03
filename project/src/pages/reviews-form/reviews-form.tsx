import { fetchReviewsAction, fetchNewCommentAction } from '../../store/offer-item-data/api-actions';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NewReviewSendStatus, ratingValues } from '../../const';
import { useAppSelector } from '../../hooks';
import React from 'react';
import { setNewReviewSendStatus } from '../../store/offer-item-data/offer-item-data';

enum ReviewLimit {
  RatingMinValue = 1,
  CommentMinLength = 50,
  CommentMaxLength = 300,
}

type ReviewsFormPropsType = {
  offerId: number;
};

function ReviewsForm({ offerId }: ReviewsFormPropsType): JSX.Element {
  const newReviewSendStatus = useAppSelector(({ OFFER_ITEM }) => OFFER_ITEM.newReviewSendStatus);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (newReviewSendStatus === NewReviewSendStatus.InProcess) {
      setFormActiveStatus(false);
      return;
    }

    if (newReviewSendStatus === NewReviewSendStatus.Success) {
      resetForm();
      dispatch(fetchReviewsAction(offerId));
    }

    setFormActiveStatus(true);
    setButtonActiveStatus(isFormValid);
    dispatch(setNewReviewSendStatus(NewReviewSendStatus.NotSend));
  }, [newReviewSendStatus, dispatch, offerId, isFormValid]);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setRating(0);
      setComment('');
    }
  };

  const setFormActiveStatus = (isActive: boolean) => {
    if (formRef.current) {
      formRef.current.querySelectorAll('input, textarea, button').forEach((element) => {
        isActive ? element.removeAttribute('disabled') : element.setAttribute('disabled', 'disabled');
      });
    }
  };

  const setButtonActiveStatus = (isActive: boolean) => {
    if (formRef.current) {
      formRef.current.querySelectorAll('button').forEach((element) => {
        isActive ? element.removeAttribute('disabled') : element.setAttribute('disabled', 'disabled');
      });
    }
  };

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
    setIsFormValid(rating >= ReviewLimit.RatingMinValue && comment.length >= ReviewLimit.CommentMinLength && comment.length <= ReviewLimit.CommentMaxLength);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const ratingTemplate = ratingValues.map((ratingValue) => (
    <React.Fragment key={`${ratingValue.value}-rating`}>
      <input onChange={handleRatingChange} className="form__rating-input visually-hidden" name="rating" value={ratingValue.value} id={`${ratingValue.value} stars`} type="radio" />
      <label htmlFor={`${ratingValue.value} stars`} className="reviews__rating-label form__rating-label" title={ratingValue.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  ));

  return (
    <form ref={formRef} onSubmit={handleReviewFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{ratingTemplate}</div>
      <textarea onChange={handleCommentChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
