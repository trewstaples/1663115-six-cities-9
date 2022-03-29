import { HostType } from './offers';

export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: HostType;
};

export type CommentsType = CommentType[];
