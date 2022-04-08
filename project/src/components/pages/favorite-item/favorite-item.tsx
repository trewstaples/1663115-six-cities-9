import { CityTabType } from '../../../types/city-tab';
import FavoriteCard from '../favorite-card/favorite-card';
import { OffersType } from '../../../types/offers';

type FavoriteItemPropsType = {
  cityTab: CityTabType;
  offers: OffersType;
};

function FavoriteItem({ cityTab, offers }: FavoriteItemPropsType): JSX.Element {
  const offersByCity = offers.filter((offer) => offer.city.name === cityTab);
  return (
    <>
      <div className="favorites__locations locations locations--current" data-testid="favorite-item">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityTab}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersByCity.map((offerByCity) => (
          <FavoriteCard key={offerByCity.id} offer={offerByCity} />
        ))}
      </div>
    </>
  );
}

export default FavoriteItem;
