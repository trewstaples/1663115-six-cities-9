import clsx from 'clsx';
import CityTabs from '../city-tabs/city-tabs';
import { CityTabType } from '../../types/city-tab';
import MainEmpty from '../main-empty/main-empty';
import OffersList from '../offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCityTab } from '../../store/offers-data/offers-data';
import { getActiveCityTab, getFilteredOffers } from '../../store/offers-data/selector';

function MainPage(): JSX.Element {
  const activeCityTab = useAppSelector(getActiveCityTab);
  const offers = useAppSelector(getFilteredOffers);

  const dispatch = useAppDispatch();
  const handleListItemChange = (newCityTab: CityTabType) => () => {
    dispatch(setCityTab({ cityTab: newCityTab }));
  };

  return (
    <main className={clsx('page__main', 'page__main--index', { 'page__main--index-empty': offers.length === 0 })}>
      <CityTabs activeCityTab={activeCityTab} handleListItemChange={handleListItemChange} />
      {offers.length === 0 ? <MainEmpty /> : <OffersList activeCityTab={activeCityTab} offers={offers} />}
    </main>
  );
}

export default MainPage;
