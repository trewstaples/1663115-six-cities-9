type ReviewType = {
  avatar: string;
  id: number;
  name: string;
  rating: number;
  date: Date;
  text: string;
};

export type ReviewsType = ReviewType[];
