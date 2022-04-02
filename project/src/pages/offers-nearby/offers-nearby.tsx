import OfferCard from '../offer-card/offer-card';
import { OffersType } from '../../types/offers';

type OffersNearbyPropsType = {
  offersNearby: OffersType;
};

function OffersNearby({ offersNearby }: OffersNearbyPropsType): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersNearby.map((offerNearby) => (
          <OfferCard offer={offerNearby} key={offerNearby.id} />
        ))}
      </div>
    </section>
  );
}

export default OffersNearby;
