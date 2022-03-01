import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
