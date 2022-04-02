import dayjs from 'dayjs';
import { ReviewType } from '../types/reviews';

export const sortReviewsByDateDown = (commentA: ReviewType, commentB: ReviewType): number => {
  const diffInMilliseconds = dayjs(commentA.date).diff(dayjs(commentB.date));
  if (diffInMilliseconds > 0) {
    return -1;
  }
  if (diffInMilliseconds < 0) {
    return 1;
  }
  return 0;
};
