import { Offers } from '../../types/offers-types';
import { OfferType } from '../../types/offers-types';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';

type OffersListPropsType = {
  offers: Offers;
};

function OffersList({ offers }: OffersListPropsType): JSX.Element {
  const [, setUserOffer] = useState(offers[0]);

  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard offer={offers[0]} onMouseOver={(offer: OfferType) => setUserOffer(offer)} />
      <PlaceCard offer={offers[1]} onMouseOver={(offer: OfferType) => setUserOffer(offer)} />
      <PlaceCard offer={offers[2]} onMouseOver={(offer: OfferType) => setUserOffer(offer)} />
      <PlaceCard offer={offers[3]} onMouseOver={(offer: OfferType) => setUserOffer(offer)} />
    </div>
  );
}

export default OffersList;
