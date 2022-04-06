import { favoritesData, loadFavoriteOffers } from './favorites-data';
import { FavoritesDataType } from '../../types/state';
import { makeFakeOffers } from '../../utils/mocks/make-fake-offer';

const fakeFavoritesOffersInitialState: FavoritesDataType = {
  favoriteOffers: [],
};

const fakeFavoritesOffers = makeFakeOffers();

describe('favoritesOffersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoritesData.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(fakeFavoritesOffersInitialState);
  });

  it('should load favorite offers', () => {
    expect(favoritesData.reducer(fakeFavoritesOffersInitialState, loadFavoriteOffers(fakeFavoritesOffers))).toEqual({
      favoriteOffers: fakeFavoritesOffers,
    });
  });
});
