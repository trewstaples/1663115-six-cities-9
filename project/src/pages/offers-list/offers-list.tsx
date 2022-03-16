import { OfferType } from '../../types/offers-types';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OffersListPropsType = {
  offer: OfferType;
  onListItemHover?: (listItemName: string) => void;
};

function OffersList({ offer, onListItemHover }: OffersListPropsType): JSX.Element {
  const [, setUserOffer] = useState(offer);

  if (typeof onListItemHover !== 'undefined') {
    const onMouseOver = (offerCard: OfferType) => {
      setUserOffer(offerCard);
      onListItemHover(offerCard.title);
    };

    return (
      <article className="cities__place-card place-card" onMouseOver={() => onMouseOver(offer)}>
        <OfferCard offer={offer} />
      </article>
    );
  }
  return (
    <article className="cities__place-card place-card">
      <OfferCard offer={offer} />
    </article>
  );
}

export default OffersList;
