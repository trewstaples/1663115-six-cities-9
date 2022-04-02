import { CityTabType } from '../../types/city-tab';
import { OffersType } from '../../types/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesItemPropsType = {
  cityTab: CityTabType;
  offers: OffersType;
};

function FavoriteItem({ cityTab, offers }: FavoritesItemPropsType): JSX.Element {
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
          <FavoriteCard offer={offerByCity} key={offerByCity.id} />
        ))}
      </div>
    </>
  );
}

export default FavoriteItem;
