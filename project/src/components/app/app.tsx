import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';
import Loading from '../loading/loading';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const NavigationState = {
  DEFAULT: true,
  LOGIN: false,
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded, offers } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage isNavigationState={NavigationState.DEFAULT} />} />
        <Route
          path={AppRoute.Login}
          element={authorizationStatus === AuthorizationStatus.Auth ? <MainPage isNavigationState={NavigationState.DEFAULT} /> : <LoginPage isNavigationState={NavigationState.LOGIN} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites isNavigationState={NavigationState.DEFAULT} offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer isNavigationState={NavigationState.DEFAULT} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
