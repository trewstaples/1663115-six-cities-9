import clsx from 'clsx';
import CityTabs from '../city-tabs/city-tabs';
import { CityTabType } from '../../types/city-tab';
import MainEmpty from '../main-empty/main-empty';
import OffersList from '../offers-list/offers-list';
import { setCityTab } from '../../store/offers/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const activeCityTab = useAppSelector((state) => state.activeCityTab);
  const offers = useAppSelector((state) => state.filteredOffers);

  const dispatch = useAppDispatch();
  const onCityTabChange = (newCityTab: CityTabType) => () => {
    dispatch(setCityTab({ cityTab: newCityTab }));
  };

  return (
    <main className={clsx('page__main', 'page__main--index', { 'page__main--index-empty': offers.length === 0 })}>
      <CityTabs activeCityTab={activeCityTab} onCityTabChange={onCityTabChange} />
      {offers.length === 0 ? <MainEmpty /> : <OffersList activeCityTab={activeCityTab} offers={offers} />}
    </main>
  );
}

export default MainPage;
