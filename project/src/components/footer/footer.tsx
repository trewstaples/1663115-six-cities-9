import { AppRoute } from '../../const';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type FooterPropsType = {
  additionalClassName?: string;
};

function Footer({ additionalClassName }: FooterPropsType): JSX.Element {
  return (
    <footer className={clsx('footer', additionalClassName)}>
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
