import { Offers } from '../../types/offers-types';
import { OfferType } from '../../types/offers-types';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OffersListPropsType = {
  offers: Offers;
  onListItemHover: (listItemName: string) => void;
};

function OffersList({ offers, onListItemHover }: OffersListPropsType): JSX.Element {
  const [, setUserOffer] = useState(offers[0]);

  const onMouseOver = (offer: OfferType) => {
    setUserOffer(offer);
    onListItemHover(offer.title);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      <OfferCard offer={offers[0]} onMouseOver={onMouseOver} />
      <OfferCard offer={offers[1]} onMouseOver={onMouseOver} />
      <OfferCard offer={offers[2]} onMouseOver={onMouseOver} />
      <OfferCard offer={offers[3]} onMouseOver={onMouseOver} />
    </div>
  );
}

export default OffersList;
