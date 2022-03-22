import { CityType } from '../../types/city';
import { CityTabType } from '../../types/city-tab';
import Map from '../map/map';
import { MapMode } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import OffersList from '../offers-list/offers-list';
import { useState } from 'react';

type CitiesContainerPropsType = {
  activeCityTab: CityTabType;
  city: CityType;
  offers: OffersType;
  placesCount: number;
};

function CitiesContainer({ activeCityTab, city, offers, placesCount }: CitiesContainerPropsType): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OfferType | undefined>(undefined);

  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placesCount} places to stay in {activeCityTab}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OffersList offer={offer} key={offer.id} onListItemHover={onListItemHover} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map offers={offers} city={city} selectedPoint={selectedPoint} mapMode={MapMode.Main} />
      </div>
    </div>
  );
}

export default CitiesContainer;
