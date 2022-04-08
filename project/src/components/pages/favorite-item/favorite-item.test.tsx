import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import FavoriteItem from './favorite-item';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const cityTab = 'Paris';
const offers = makeFakeOffers();

describe('Component: FavoriteItem', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FavoriteItem cityTab={cityTab} offers={offers} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('favorite-item')).toBeInTheDocument();
    expect(screen.getByText(cityTab)).toBeInTheDocument();

    expect(screen.getByTestId('favorite-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
