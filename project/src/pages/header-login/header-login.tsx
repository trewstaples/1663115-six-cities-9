import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderLogin(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link to={AppRoute.Login} className="header__nav-link">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderLogin;
