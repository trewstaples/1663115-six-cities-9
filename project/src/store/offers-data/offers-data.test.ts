import { City, defaultActiveCity, DEFAULT_ACTIVE_CITY_TAB, DEFAULT_OFFERS_SORT_TYPE, OffersSortType } from '../../const';
import { loadOffers, offersData, setCityTab, setOffers, setOffersSortType } from './offers-data';
import { makeFakeOffers } from '../../utils/mocks/make-fake-offer';
import { OffersDataType } from '../../types/state';
import { sortOffersByPriceUp } from '../../utils/offers-sort';

const fakeOffersDataInitialState: OffersDataType = {
  activeCity: defaultActiveCity,
  activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
  filteredOffers: [],
  isDataLoaded: false,
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

const fakeOffers = makeFakeOffers();
const sortedOffers = fakeOffers.sort(sortOffersByPriceUp);

describe('offersDataReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(fakeOffersDataInitialState);
  });

  it('should load offers', () => {
    expect(offersData.reducer(fakeOffersDataInitialState, loadOffers(fakeOffers))).toEqual({
      activeCity: fakeOffers.filter((offer) => offer.city.name === DEFAULT_ACTIVE_CITY_TAB)[0].city,
      activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
      filteredOffers: fakeOffers.filter((offer) => offer.city.name === DEFAULT_ACTIVE_CITY_TAB),
      isDataLoaded: true,
      offers: fakeOffers,
      offersSortType: DEFAULT_OFFERS_SORT_TYPE,
    });
  });

  it(`should set city tab to ${City.Paris}`, () => {
    expect(offersData.reducer(fakeOffersDataInitialState, setCityTab(City.Paris))).toEqual({
      activeCity: fakeOffers.filter((offer) => offer.city.name === City.Paris)[0].city,
      activeCityTab: City.Paris,
      filteredOffers: fakeOffers.filter((offer) => offer.city.name === City.Paris),
      isDataLoaded: false,
      offers: [],
      offersSortType: DEFAULT_OFFERS_SORT_TYPE,
    });
  });

  it('should set offers sorted by price up', () => {
    expect(offersData.reducer(fakeOffersDataInitialState, setOffers(sortedOffers))).toEqual({
      activeCity: defaultActiveCity,
      activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
      filteredOffers: [],
      isDataLoaded: false,
      offers: sortedOffers,
      offersSortType: DEFAULT_OFFERS_SORT_TYPE,
    });
  });

  it(`should set offers sort type to ${OffersSortType.PriceHighToLow}`, () => {
    expect(offersData.reducer(fakeOffersDataInitialState, setOffersSortType(OffersSortType.PriceHighToLow))).toEqual({
      activeCity: defaultActiveCity,
      activeCityTab: DEFAULT_ACTIVE_CITY_TAB,
      filteredOffers: [],
      isDataLoaded: false,
      offers: [],
      offersSortType: OffersSortType.PriceHighToLow,
    });
  });
});
