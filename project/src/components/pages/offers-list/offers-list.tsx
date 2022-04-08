import { CityTabType } from '../../../types/city-tab';
import Map from '../map/map';
import OfferCard from '../offer-card/offer-card';
import OffersSort from '../offers-sort/offers-sort';
import { OffersType } from '../../../types/offers';
import { useState } from 'react';

type OffersListPropsType = {
  activeCityTab: CityTabType;
  offers: OffersType;
};

function OffersList({ activeCityTab, offers }: OffersListPropsType): JSX.Element {
  const [selectedCardId, setSelectedCardId] = useState<number>(0);

  return (
    <div className="cities" data-testid="offers-list">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {activeCityTab}
          </b>
          <OffersSort />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard offer={offer} key={offer.id} onMouseOverAndLeave={setSelectedCardId} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={offers} selectedCardId={selectedCardId} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OffersList;
