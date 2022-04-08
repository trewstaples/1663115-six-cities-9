import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import MainEmpty from './main-empty';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const activeCityTab = 'Paris';

const mockStore = configureMockStore();

const store = mockStore({
  OFFERS: { activeCityTab: activeCityTab },
});

const history = createMemoryHistory();

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainEmpty />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('main-empty')).toBeInTheDocument();
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${activeCityTab}`)).toBeInTheDocument();
  });
});
