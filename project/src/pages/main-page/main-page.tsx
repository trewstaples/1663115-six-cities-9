import { CityTabType } from '../../types/city-tab';
import CityTabs from '../city-tabs/city-tabs';
import OffersContainer from '../offers-container/offers-container';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';
import { setCityTab } from '../../store/offers/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type MainPagePropsType = {
  isNavigationState: boolean;
};

function MainPage({ isNavigationState: navigationState }: MainPagePropsType): JSX.Element {
  const activeCityTab = useAppSelector((state) => state.activeCityTab);
  const cityOffers = useAppSelector((state) => state.filteredOffers);
  const activeCity = useAppSelector((state) => state.activeCity);

  const dispatch = useAppDispatch();
  const handleCityTabChange = (newCityTab: CityTabType) => () => {
    dispatch(setCityTab({ cityTab: newCityTab }));
  };

  return (
    <div className={`page page--gray page--main ${cityOffers ? '' : 'page__main--index-empty'}`}>
      <Header isNavigationState={navigationState} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs activeCityTab={activeCityTab} handleCityTabChange={handleCityTabChange} />
        <div className="cities">{cityOffers && activeCity ? <OffersContainer activeCityTab={activeCityTab} city={activeCity} offers={cityOffers} /> : <MainEmpty activeCityTab={activeCityTab} />}</div>
      </main>
    </div>
  );
}

export default MainPage;
