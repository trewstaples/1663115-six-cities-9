import { Offers } from '../../types/offers-types';
import PlaceCard from '../place-card/place-card';

type OffersListPropsType = {
  offers: Offers;
};

function OffersList({ offers }: OffersListPropsType): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard offer={offers[0]} />
      <PlaceCard offer={offers[1]} />
      <PlaceCard offer={offers[2]} />
      <PlaceCard offer={offers[3]} />
    </div>
  );
}

export default OffersList;
