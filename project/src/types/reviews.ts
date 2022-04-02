import { HostType } from './offers';

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: HostType;
};

export type ReviewsType = ReviewType[];
