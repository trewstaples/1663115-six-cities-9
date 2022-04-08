import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import FavoriteCard from './favorite-card';
import { makeFakeOffer } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const offer = makeFakeOffer();

describe('Component: FavoriteCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FavoriteCard offer={offer} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('favorite-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
