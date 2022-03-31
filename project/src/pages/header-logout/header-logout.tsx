import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/user/api-actions';

function HeaderLogout(): JSX.Element {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <Link to={AppRoute.Login} onClick={handleLogoutClick} className="header__nav-link">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderLogout;
