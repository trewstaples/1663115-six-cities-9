import { CommentsType } from '../../types/comments';
import { dateFormat } from '../../utils/date-format';
import ReviewsForm from '../reviews-form/reviews-form';

const REVIEWS_RATING = 20;

type ReviewsListPropsType = {
  comments: CommentsType;
};

function CommentsList({ comments }: ReviewsListPropsType): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => {
          const keyValue = `${comment.id}`;
          return (
            <li key={keyValue} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">{comment.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: `${Math.round(comment.rating) * REVIEWS_RATING}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{comment.comment}</p>
                <time className="reviews__time" dateTime={comment.date.toString()}>
                  {dateFormat(comment.date)}
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

export default CommentsList;
