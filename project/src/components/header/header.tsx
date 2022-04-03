import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HeaderNav from '../header-nav/header-nav';

type HeaderPropsType = {
  isLoginNavState?: boolean;
};

function Header({ isLoginNavState }: HeaderPropsType): JSX.Element {
  const isUserAuthorized = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </a>
          </div>
          {isLoginNavState && <HeaderNav isUserAuthorized={isUserAuthorized} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
