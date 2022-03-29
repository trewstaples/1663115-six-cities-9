import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderEmail(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      </Link>
    </li>
  );
}

export default HeaderEmail;
