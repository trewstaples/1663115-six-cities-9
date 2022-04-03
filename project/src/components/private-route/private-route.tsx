import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRoutePropsType = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRoutePropsType): JSX.Element {
  const { children } = props;

  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
