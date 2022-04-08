import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import FavoriteButton from './favorite-button';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { makeFakeOffer } from '../../../utils/mocks/make-fake-offer';

const isUserAuthorized = true;
const fakeOffer = makeFakeOffer();

const mockStore = configureMockStore();

const store = mockStore({
  USER: { isUserAuthorize: isUserAuthorized },
});

const history = createMemoryHistory();

describe('Component: FavoriteButton', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoriteButton offer={fakeOffer} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  });
});
