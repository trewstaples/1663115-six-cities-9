import { AppRoute } from '../../const';
import clsx from 'clsx';
import { Footer } from '../footer/footer';
import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';

function Layout(): JSX.Element {
  const location = useLocation();

  const isLayoutWithHeader = location.pathname !== AppRoute.Login;

  const isLayoutWithFooter = [`${AppRoute.Favorites}`, `${AppRoute.FavoritesEmpty}`].includes(location.pathname);

  let footer;
  if (isLayoutWithFooter) {
    footer = <Footer additionalClassName={location.pathname === AppRoute.Favorites ? 'container' : ''} />;
  }

  return (
    <div
      className={clsx(
        'page',
        { 'page--gray page--main': location.pathname === AppRoute.Main },
        { 'page--favorites-empty': location.pathname === AppRoute.FavoritesEmpty },
        { 'page--gray page--login': location.pathname === AppRoute.Login },
      )}
    >
      <Header loginNavState={isLayoutWithHeader} />
      <Outlet />
      {footer}
    </div>
  );
}

export default Layout;
