const RATING_PERCENT = 20;

export const getRating = (rating: number) => `${Math.round(rating) * RATING_PERCENT}%`;

export const getType = (type: string) => type[0].toUpperCase() + type.substring(1);
