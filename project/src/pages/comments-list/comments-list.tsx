import { CommentsType } from '../../types/comments';
import CommentItem from '../comment-item/comment-item';
import ReviewsForm from '../reviews-form/reviews-form';

type CommentsListPropsType = {
  comments: CommentsType;
};

function CommentsList({ comments }: CommentsListPropsType): JSX.Element {
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
      <ReviewsForm />
    </section>
  );
}

export default CommentsList;
