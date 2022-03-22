/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { CityType } from '../../types/city';
import { CityTabType } from '../../types/city-tab';
import { citiesLocations } from '../../mocks/city';
import CityTabs from '../city-tabs/city-tabs';
import CitiesContainer from '../cities-container/cities-container';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';
import { fullOffers } from '../../mocks/offers-mocks';
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
  //Напишите код для получения списка предложений по аренде в соответствии с выбранным городом.
  //В массив предложений каждому предложениб добавить координаты города предложения
  //При смене cityTab, пройтись по массиву предложений, отфлитровав предложения в соответствии с выбранным городом
  //Отфильтрованные предложения передать в дочерние компоненты для перерисовки и в глобальное состояние

  const activeCity = citiesLocations.find((cityLocation) => cityLocation.title === cityTab);

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
