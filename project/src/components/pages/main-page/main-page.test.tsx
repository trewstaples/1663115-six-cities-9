import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import MainPage from './main-page';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';

const fakeActiveCityTab = 'Paris';
const fake0ffers = makeFakeOffers();

const mockStore = configureMockStore();

const store = mockStore({
  OFFERS: { activeCityTab: fakeActiveCityTab, offers: fake0ffers },
});

const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('page__main')).toBeInTheDocument();
  });
});
