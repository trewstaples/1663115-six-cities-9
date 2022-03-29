import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { CommentsType } from '../../types/comments';
import CommentItem from '../comment-item/comment-item';
import ReviewsForm from '../reviews-form/reviews-form';

type CommentsListPropsType = {
  comments: CommentsType;
  offerId: number;
};

function CommentsList({ comments, offerId }: CommentsListPropsType): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
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
              <CommentItem comment={comment} />
            </li>
          );
        })}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewsForm offerId={offerId} /> : ''}
    </section>
  );
}

export default CommentsList;
