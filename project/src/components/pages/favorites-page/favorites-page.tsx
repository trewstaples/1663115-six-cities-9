import { cityTabs } from '../../../const';
import { CityTabType } from '../../../types/city-tab';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoriteItem from '../favorite-item/favorite-item';
import { getFavoriteOffers } from '../../../store/favorites-data/selector';
import { useAppSelector } from '../../../hooks';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);

  if (!offers.length) {
    return <FavoritesEmpty />;
  }

  const favoriteItemsTemplate = cityTabs.map((cityTab) => (
    <li className="favorites__locations-items" key={cityTab}>
      <FavoriteItem cityTab={cityTab as CityTabType} offers={offers} />
    </li>
  ));

  return (
    <main className="page__main page__main--favorites" data-testid="favorites-page">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">{favoriteItemsTemplate}</ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
