import { CommentType } from '../../types/comments';
import { dateFormat } from '../../utils/date-format';

const COMMENTS_RATING = 20;

type CommentItemPropsType = {
  comment: CommentType;
};

function CommentItem({ comment }: CommentItemPropsType): JSX.Element {
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(comment.rating) * COMMENTS_RATING}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={comment.date.toString()}>
          {dateFormat(comment.date)}
        </time>
      </div>
    </>
  );
}

export default CommentItem;
