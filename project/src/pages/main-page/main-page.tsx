/* eslint-disable no-console */
import { CityType } from '../../types/city';
import { CityTabType } from '../../types/city-tab';
import CityTabs from '../city-tabs/city-tabs';
import CitiesContainer from '../cities-container/cities-container';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';
import { OffersType } from '../../types/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCityTab } from '../../store/action';

type MainPagePropsType = {
  city: CityType;
  isNavigationState: boolean;
  offers?: OffersType | undefined;
  placesCount: number;
};

function MainPage({ placesCount, isNavigationState: navigationState, offers, city }: MainPagePropsType): JSX.Element {
  const cityTab = useAppSelector((state) => state.cityTab);
  const cityOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const handleCityTabChange = (newCityTab: CityTabType) => () => {
    dispatch(setCityTab({ cityTab: newCityTab }));
  };

  return (
    <div className={`page page--gray page--main ${offers ? '' : 'page__main--index-empty'}`}>
      <Header isNavigationState={navigationState} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs activeCityTab={cityTab} handleCityTabChange={handleCityTabChange} />
        <div className="cities">{cityOffers ? <CitiesContainer activeCityTab={cityTab} city={city} offers={cityOffers} placesCount={placesCount} /> : <MainEmpty activeCityTab={cityTab} />}</div>
      </main>
    </div>
  );
}

export default MainPage;
