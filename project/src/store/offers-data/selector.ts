import { CityTabType } from '../../types/city-tab';
import { OffersType } from '../../types/offers';
import { OffersSortTypeKey } from '../../types/offers-sort';
import { StateType } from '../../types/state';

export const getActiveCityTab = (state: StateType): CityTabType => state.OFFERS.activeCityTab;

export const getIsDataLoaded = (state: StateType): boolean => state.OFFERS.isDataLoaded;

export const getFilteredOffers = (state: StateType): OffersType => state.OFFERS.filteredOffers;

export const getActiveSortType = (state: StateType): OffersSortTypeKey => state.OFFERS.offersSortType;
