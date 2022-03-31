import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HeaderEmail from '../../pages/header-email/header-email';
import HeaderLogin from '../../pages/header-login/header-login';
import HeaderLogout from '../../pages/header-logout/header-logout';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <>
            <HeaderEmail />

            <HeaderLogout />
          </>
        ) : (
          <HeaderLogin />
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
