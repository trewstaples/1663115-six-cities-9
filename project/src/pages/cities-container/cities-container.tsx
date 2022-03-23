import { CityType } from '../../types/city';
import { CityTabType } from '../../types/city-tab';
import Map from '../map/map';
import { MapMode } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import OffersSort from '../offers-sort/offers-sort';
import OffersList from '../offers-list/offers-list';
import { useState } from 'react';

type CitiesContainerPropsType = {
  activeCityTab: CityTabType;
  city: CityType;
  offers: OffersType;
};

function CitiesContainer({ activeCityTab, city, offers }: CitiesContainerPropsType): JSX.Element {
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
          {offers.length} places to stay in {activeCityTab}
        </b>
        <OffersSort offers={offers} />
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
