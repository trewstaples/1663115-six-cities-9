import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import HeaderNavigation from './header-navigation';
import { makeFakeUser } from '../../utils/mocks/make-fake-user';

const fakeUserAuthorized = true;
const fakeUserNotAuthorized = false;
const fakeUser = makeFakeUser();
const history = createMemoryHistory();

describe('Component: HeaderNavigation', () => {
  it('should render "HeaderNavigation" when user authorized', () => {
    render(
      <HistoryRouter history={history}>
        <HeaderNavigation isUserAuthorized={fakeUserAuthorized} user={fakeUser} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('header-navigation')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should not render "HeaderNavigation" when user unauthorized', () => {
    render(
      <HistoryRouter history={history}>
        <HeaderNavigation isUserAuthorized={fakeUserNotAuthorized} user={fakeUser} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('header-navigation')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
