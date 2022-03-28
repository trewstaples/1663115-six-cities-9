/* eslint-disable no-console */
import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';
import LoadingScreen from '../loading/loading';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { reviews } from '../../mocks/reviews-mocks';
import { useAppSelector } from '../../hooks';

const NavigationState = {
  DEFAULT: true,
  LOGIN: false,
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded, offers } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage isNavigationState={NavigationState.DEFAULT} />} />
        <Route path={AppRoute.Login} element={<LoginPage isNavigationState={NavigationState.LOGIN} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
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
