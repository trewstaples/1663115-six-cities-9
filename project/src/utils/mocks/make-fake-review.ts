import { datatype, date, lorem } from 'faker';
import { makeFakeUser } from './make-fake-user';
import { ReviewType, ReviewsType } from '../../types/reviews';

enum FakeConstants {
  CommentSentenceNumber = 5,
  ReviewsNumber = 6,
}

export const makeFakeReview = (): ReviewType => ({
  comment: lorem.paragraph(FakeConstants.CommentSentenceNumber),
  date: `${date.past()}`,
  id: datatype.number(),
  rating: datatype.number(),
  user: makeFakeUser(),
});

// export const makeFakeReviews = (): ReviewsType => Array.from(Array(FakeConstants.ReviewsNumber), () => makeFakeReview());

export const makeFakeReviews = (): ReviewsType => new Array(FakeConstants.ReviewsNumber).fill(null).map(() => makeFakeReview());
