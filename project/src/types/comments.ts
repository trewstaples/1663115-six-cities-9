import { HostType } from './offers';

type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: HostType;
};

export type CommentsType = CommentType[];
