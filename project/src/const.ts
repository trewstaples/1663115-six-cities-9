export const DEFAULT_ACTIVE_CITY_TAB = 'Paris';

export const DEFAULT_OFFERS_SORT_TYPE = 'Popular';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  City = '/:cityTab',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login',
  Logout = '/logout',
  NotFound = '/404',
  Main = '/',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
  OfferItem = '/hotels/:id',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum DateFormat {
  Display = 'MMMM YYYY',
  Markup = 'YYYY-MM-DD',
}

export enum HttpCode {
  BadRequest = 400,
  Unathorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Favorites = 'Favorites',
  OfferItem = 'OfferItem',
  Offers = 'Offers',
  User = 'User',
}

export enum NewReviewSendStatus {
  NotSend = 'NotSend',
  InProcess = 'InProcess',
  Error = 'Error',
  Success = 'Success',
}

export enum OffersSortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const cityTabs = Object.keys(City);

export const defaultActiveCity = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  name: 'Paris',
};

export const offersSortTypes = Object.keys(OffersSortType);

export const ratingValues = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good',
  },
  {
    value: '3',
    title: 'not bad',
  },
  {
    value: '2',
    title: 'badly',
  },
  {
    value: '1',
    title: 'terribly',
  },
];
