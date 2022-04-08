import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import OffersSort from './offers-sort';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';
import { DEFAULT_OFFERS_SORT_TYPE } from '../../../const';

const fakeOffers = makeFakeOffers();

const mockStore = configureMockStore();

const store = mockStore({
  OFFERS: { offers: fakeOffers, offersSortType: DEFAULT_OFFERS_SORT_TYPE },
});

const history = createMemoryHistory();

describe('Component: OffersSort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OffersSort />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('offers-sort')).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_OFFERS_SORT_TYPE)).toBeInTheDocument();
  });
});
