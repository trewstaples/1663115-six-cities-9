import { combineReducers } from '@reduxjs/toolkit';
import { favoritesData } from './favorites-data/favorites-data';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { offerItemData } from './offer-item-data/offer-item-data';
import { userProcess } from './user-data/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.OfferItem]: offerItemData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
