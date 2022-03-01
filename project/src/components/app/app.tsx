import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

type AppPropsType = {
  placesCount: number;
};

const NavigaionState = {
  DEFAULT: true,
  LOGIN: false,
};

function App({ placesCount }: AppPropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={placesCount} isNavigationState={NavigaionState.DEFAULT} />} />
        <Route path={AppRoute.Login} element={<LoginPage isNavigationState={NavigaionState.LOGIN} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites isNavigationState={NavigaionState.DEFAULT} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer isNavigationState={NavigaionState.DEFAULT} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
