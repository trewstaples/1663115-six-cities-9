import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderNavPropsType = {
  isUserAuthorized: boolean;
};

function HeaderNav({ isUserAuthorized }: HeaderNavPropsType): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isUserAuthorized ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isUserAuthorized ? <span className="header__user-name user__name">{'Petya'}</span> : <span className="header__login">Sign in</span>}
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

export default HeaderNav;
