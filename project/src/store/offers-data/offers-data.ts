import { createSlice } from '@reduxjs/toolkit';
import { defaultActiveCity, DEFAULT_ACTIVE_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE, NameSpace } from '../../const';
import { OffersDataType } from '../../types/state';

const initialState: OffersDataType = {
  activeCity: defaultActiveCity,
  activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
  filteredOffers: [],
  isDataLoaded: false,
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

export const offersData = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.activeCityTab);
      state.activeCity = state.filteredOffers[0].city;
      state.isDataLoaded = true;
    },
    setCityTab: (state, action) => {
      const { cityTab } = action.payload;
      state.activeCityTab = cityTab;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.activeCityTab);
      state.activeCity = state.filteredOffers[0].city;
      state.offersSortType = DEFAULT_OFFERS_SORT_TYPE;
    },
    setOffers: (state, action) => {
      state.filteredOffers = action.payload.sortedOffers;
    },
    setOffersSortType: (state, action) => {
      state.offersSortType = action.payload.offersSortType;
    },
  },
});

export const { loadOffers, setCityTab, setOffers, setOffersSortType } = offersData.actions;
