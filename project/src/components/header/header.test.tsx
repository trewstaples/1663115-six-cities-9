import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Header from './header';
import HistoryRouter from '../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeUser } from '../../utils/mocks/make-fake-user';
import { Provider } from 'react-redux';

const user = makeFakeUser();
const isUserAuthorized = true;
const isLoginNavState = true;

const mockStore = configureMockStore();

const store = mockStore({
  USER: { isUserAuthorize: isUserAuthorized, user: user },
});

const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render HeaderNavigation if isLoginNavState = true', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header isLoginNavState={isLoginNavState} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-navigation')).toBeInTheDocument();
  });
});
