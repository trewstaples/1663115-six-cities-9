import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { UserType } from '../../types/state';

type HeaderNavigationPropsType = {
  isUserAuthorized: boolean;
  user: UserType;
};

function HeaderNavigation({ isUserAuthorized, user }: HeaderNavigationPropsType): JSX.Element {
  return (
    <nav className="header__nav" data-testid="header-navigation">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isUserAuthorized ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isUserAuthorized ? <span className="header__user-name user__name">{user.email}</span> : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isUserAuthorized && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Logout}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
