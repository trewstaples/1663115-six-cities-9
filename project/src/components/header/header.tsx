import { AuthorizationStatus } from '../../const';
import HeaderEmail from '../../pages/header-email/header-email';
import HeaderLogin from '../../pages/header-login/header-login';
import HeaderLogout from '../../pages/header-logout/header-logout';
// import { logoutAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';

type HeaderPropsType = {
  isNavigationState: boolean;
};

function Header({ isNavigationState: navigationState }: HeaderPropsType): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  // const dispatch = useAppDispatch();

  // const onClick = () => {
  //   dispatch(logoutAction());
  // };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </a>
          </div>
          {navigationState ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth ? (
                  <>
                    <HeaderEmail />

                    <HeaderLogin />
                  </>
                ) : (
                  <HeaderLogout />
                )}
              </ul>
            </nav>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
