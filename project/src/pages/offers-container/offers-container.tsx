import { CityTabType } from '../../types/city-tab';
import Map from '../map/map';
import { MapMode } from '../../const';
// import OffersList from '../offers-list/offers-list';
import OffersSort from '../offers-sort/offers-sort';
import { OffersType } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';

type OffersContainerPropsType = {
  activeCityTab: CityTabType;
  offers: OffersType;
};

function OffersContainer({ activeCityTab, offers }: OffersContainerPropsType): JSX.Element {
  const [selectedCardId, setSelectedCardId] = useState<number>(0);
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {activeCityTab}
          </b>
          <OffersSort />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard offer={offer} key={offer.id} onMouseOver={setSelectedCardId} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} city={activeCity} selectedCardId={selectedCardId} mapMode={MapMode.Main} />
        </div>
      </div>
    </div>
  );
}

export default OffersContainer;
