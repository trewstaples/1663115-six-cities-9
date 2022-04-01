export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/404',
  Root = 'Root',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  OfferItem = '/hotels/:id',
  Login = '/login',
  Logout = '/logout',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum MapMode {
  Main = 'MAIN',
  Offer = 'OFFER',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityTabs = Object.keys(City);

export const DEFAULT_ACTIVE_CITY_TAB = City.Paris;

export const DEFAULT_ACTIVE_CITY = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  name: 'Paris',
};

export enum OffersSortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const offersSortTypes = Object.keys(OffersSortType);

export const DEFAULT_OFFERS_SORT_TYPE = OffersSortType.Popular;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum DateFormat {
  Display = 'MMMM YYYY',
  Markup = 'YYYY-MM-DD',
}

export enum NewReviewSendStatus {
  NotSend = 'NotSend',
  InProcess = 'InProcess',
  Error = 'Error',
  Success = 'Success',
}

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
