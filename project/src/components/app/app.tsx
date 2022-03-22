import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { BrowserRouter } from 'react-router-dom';
import { CityType } from '../../types/city';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { OffersType } from '../../types/offers';
import { reviews } from '../../mocks/reviews-mocks';

type AppPropsType = {
  placesCount: number;
  offers: OffersType;
  city: CityType;
};

const NavigationState = {
  DEFAULT: true,
  LOGIN: false,
};

function App({ placesCount, offers, city }: AppPropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={placesCount} offers={offers} isNavigationState={NavigationState.DEFAULT} city={city} />} />
        <Route path={AppRoute.Login} element={<LoginPage isNavigationState={NavigationState.LOGIN} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites isNavigationState={NavigationState.DEFAULT} offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer isNavigationState={NavigationState.DEFAULT} offers={offers} reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
