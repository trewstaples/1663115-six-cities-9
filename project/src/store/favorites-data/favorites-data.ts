import { createSlice } from '@reduxjs/toolkit';
import { FavoritesDataType } from '../../types/state';
import { NameSpace } from '../../const';

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
