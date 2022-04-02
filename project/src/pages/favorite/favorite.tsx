import Header from '../../components/header/header';
import { cityTabs } from '../../const';
import { useAppSelector } from '../../hooks';
import { CityTabType } from '../../types/city-tab';
import FavoriteEmpty from '../favorite-empty/favorite-empty';
import FavoriteItem from '../favorite-item/favorites-item';

function Favorite(): JSX.Element {
  const offers = useAppSelector((state) => state.favoriteOffers);

  if (!offers.length) {
    return <FavoriteEmpty />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityTabs.map((cityTab) => (
                <li className="favorites__locations-items" key={cityTab}>
                  <FavoriteItem cityTab={cityTab as CityTabType} offers={offers} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorite;
