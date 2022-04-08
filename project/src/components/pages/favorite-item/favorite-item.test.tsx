import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import FavoriteItem from './favorite-item';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const fakeCityTab = 'Paris';
const fakeOffers = makeFakeOffers();

describe('Component: FavoriteItem', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FavoriteItem cityTab={fakeCityTab} offers={fakeOffers} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('favorite-item')).toBeInTheDocument();
    expect(screen.getByText(fakeCityTab)).toBeInTheDocument();

    expect(screen.getByTestId('favorite-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
