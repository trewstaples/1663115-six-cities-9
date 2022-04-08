import { getActiveCityTab } from '../../../store/offers-data/selector';
import { useAppSelector } from '../../../hooks';

function MainEmpty(): JSX.Element {
  const activeCityTab = useAppSelector(getActiveCityTab);
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places" data-testid="main-empty">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {activeCityTab}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default MainEmpty;
