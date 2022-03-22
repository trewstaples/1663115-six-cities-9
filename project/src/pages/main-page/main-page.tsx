import { City } from '../../types/offers-types';
import CityTabs from '../city-tabs/city-tabs';
import CitiesContainer from '../cities-container/cities-container';
import Header from '../../components/header/header';
import MainEmpty from '../main-empty/main-empty';
import { Offers } from '../../types/offers-types';

type MainPagePropsType = {
  city: City;
  isNavigationState: boolean;
  offers?: Offers | undefined;
  placesCount: number;
};

function MainPage({ placesCount, isNavigationState: navigationState, offers, city }: MainPagePropsType): JSX.Element {
  return (
    <div className={`page page--gray page--main ${offers ? '' : 'page__main--index-empty'}`}>
      <Header isNavigationState={navigationState} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">{offers ? <CitiesContainer city={city} offers={offers} placesCount={placesCount} /> : <MainEmpty />}</div>
      </main>
    </div>
  );
}

export default MainPage;
