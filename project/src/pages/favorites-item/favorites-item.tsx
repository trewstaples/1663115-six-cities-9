import { CityTabType } from '../../types/city-tab';
import { OffersType } from '../../types/offers';
import FavoritesCard from '../favorites-card/favorites-card';

type FavoritesItemPropsType = {
  cityTab: CityTabType;
  offers: OffersType;
};

function FavoritesItem({ cityTab, offers }: FavoritesItemPropsType): JSX.Element {
  const offersByCity = offers.filter((offer) => offer.city.name === cityTab);
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityTab}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersByCity.map((offerByCity) => (
          <FavoritesCard offer={offerByCity} key={offerByCity.id} />
        ))}
      </div>
    </>
  );
}

export default FavoritesItem;
