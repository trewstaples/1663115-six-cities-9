import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import FavoritesPage from './favorites-page';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';

const fakeOffers = makeFakeOffers();

const mockStore = configureMockStore();

const store = mockStore({
  OFFERS: { offers: fakeOffers },
});

const history = createMemoryHistory();

describe('Component: FavoritesPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-item')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-card')).toBeInTheDocument();
  });
});
