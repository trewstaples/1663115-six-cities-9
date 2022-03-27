import { CityTabType } from '../../types/city-tab';
import { citiesLocations } from '../../mocks/city';
import CityTabs from '../city-tabs/city-tabs';
import CitiesContainer from '../cities-container/cities-container';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCityTab } from '../../store/action';

type MainPagePropsType = {
  isNavigationState: boolean;
};

function MainPage({ isNavigationState: navigationState }: MainPagePropsType): JSX.Element {
  const cityTab = useAppSelector((state) => state.cityTab);
  const cityOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const handleCityTabChange = (newCityTab: CityTabType) => () => {
    dispatch(setCityTab({ cityTab: newCityTab }));
  };

  const activeCity = citiesLocations.find((cityLocation) => cityLocation.name === cityTab);

  return (
    <div className={`page page--gray page--main ${cityOffers ? '' : 'page__main--index-empty'}`}>
      <Header isNavigationState={navigationState} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs activeCityTab={cityTab} handleCityTabChange={handleCityTabChange} />
        <div className="cities">{cityOffers && activeCity ? <CitiesContainer activeCityTab={cityTab} city={activeCity} offers={cityOffers} /> : <MainEmpty activeCityTab={cityTab} />}</div>
      </main>
    </div>
  );
}

export default MainPage;
