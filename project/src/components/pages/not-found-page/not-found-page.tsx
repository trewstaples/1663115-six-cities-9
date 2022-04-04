import { AppRoute } from '../../../const';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              <p>404.Страница не найдена</p>
            </b>
            <Link to={AppRoute.Main}>Вернуться на главную</Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
