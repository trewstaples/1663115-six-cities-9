import { OffersType } from '../../types/offers';
import { StateType } from '../../types/state';

export const getFavoriteOffers = (state: StateType): OffersType => state.FAVORITES.favoriteOffers;
