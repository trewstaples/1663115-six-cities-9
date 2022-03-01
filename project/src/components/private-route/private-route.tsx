import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';

type PrivateRoutePropsType = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRoutePropsType): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
