import { AppRoute } from '../../const';
import { getIsUserAuthorized } from '../../store/user-data/selector';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRoutePropsType = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRoutePropsType): JSX.Element {
  const { children } = props;

  const isUserAuthorized = useAppSelector(getIsUserAuthorized);

  return isUserAuthorized ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
