import { AppRoute, AuthorizationStatus } from '../../const';
import { useLocation, useNavigate } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Layout from '../layout/layout';
import Loading from '../loading/loading';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { logoutAction } from '../../store/user-data/api-action';
import { getAuthorizationStatus } from '../../store/user-data/selector';
import { getIsDataLoaded } from '../../store/offers-data/selector';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === AppRoute.Logout) {
      dispatch(logoutAction());
      navigate(AppRoute.Main);
    }
  });

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
