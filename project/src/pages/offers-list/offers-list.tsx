import { OfferType } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListPropsType = {
  offer: OfferType;
  onListItemHover?: (listItemName: number) => void;
};

function OffersList({ offer, onListItemHover }: OffersListPropsType): JSX.Element {
  if (typeof onListItemHover !== 'undefined') {
    const onMouseOver = (offerCard: OfferType) => {
      onListItemHover(offerCard.id);
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
