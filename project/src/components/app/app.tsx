import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type PropsType = {
  placesCount: number;
}

const NavigaionState = {
  DEFAULT: true,
  LOGIN: false,
};

function App({placesCount}: PropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesCount = {placesCount} navigationState = {NavigaionState.DEFAULT}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage navigationState = {NavigaionState.LOGIN}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites navigationState = {NavigaionState.DEFAULT}/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer navigationState = {NavigaionState.DEFAULT}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
