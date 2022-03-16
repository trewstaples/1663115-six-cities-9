import NearPlaceCard from '../near-place-card/near-place-card';
import { Offers } from '../../types/offers-types';

type NearPlacesListPropsType = {
  offers: Offers;
};

function NearPlacesList({ offers }: NearPlacesListPropsType): JSX.Element {
  return (
    <div className="near-places__list places__list">
      <NearPlaceCard offer={offers[0]} />;
      <NearPlaceCard offer={offers[1]} />;
      <NearPlaceCard offer={offers[2]} />;
    </div>
  );
}

export default NearPlacesList;
