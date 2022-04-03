import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesDataType } from '../../types/state';

const initialState: FavoritesDataType = {
  favoriteOffers: [],
};

export const favoritesData = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
  },
});

export const { loadFavoriteOffers } = favoritesData.actions;
