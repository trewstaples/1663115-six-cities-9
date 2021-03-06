import React from 'react';
import { getIsUserAuthorized, getUser } from '../../store/user-data/selector';
import HeaderNavigation from '../header-navigation/header-navigation';
import { useAppSelector } from '../../hooks';

type HeaderPropsType = {
  isLoginNavState?: boolean;
};

function Header({ isLoginNavState }: HeaderPropsType): JSX.Element {
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const user = useAppSelector(getUser);

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </a>
          </div>
          {isLoginNavState && <HeaderNavigation isUserAuthorized={isUserAuthorized} user={user} />}
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
