import App from './app';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: { isDataLoaded: true },
  USER: { authorizationStatus: AuthorizationStatus.Auth },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Layout" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByTestId('page')).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByTestId('page__main')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offer:id"', () => {
    history.push(AppRoute.Offer);

    render(fakeApp);

    expect(screen.getByTestId('offer-page')).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
