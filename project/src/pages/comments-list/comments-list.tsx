import dayjs from 'dayjs';
import { CommentsType, CommentType } from '../../types/comments';
import CommentItem from '../comment-item/comment-item';

const COMMENTS_MAX_COUNT = 10;

type CommentsListPropsType = {
  comments: CommentsType;
};

function CommentsList({ comments }: CommentsListPropsType): JSX.Element {
  const sortCommentsByDateDown = (commentA: CommentType, commentB: CommentType): number => {
    const diffInMilliseconds = dayjs(commentA.date).diff(dayjs(commentB.date));
    if (diffInMilliseconds > 0) {
      return -1;
    }
    if (diffInMilliseconds < 0) {
      return 1;
    }
    return 0;
  };

  const sortedComments = comments.slice(0, COMMENTS_MAX_COUNT).sort(sortCommentsByDateDown);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedComments.map((comment) => {
          const keyValue = `${comment.id}`;
          return (
            <li key={keyValue} className="reviews__item">
              <CommentItem comment={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommentsList;
