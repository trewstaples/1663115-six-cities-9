import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import OffersNearby from './offers-nearby';
import { makeFakeOffersNearby } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const offersNearby = makeFakeOffersNearby();

describe('Component: OffersNearby', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OffersNearby offersNearby={offersNearby} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offers-nearby')).toBeInTheDocument();
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
    expect(screen.getByTestId('offer-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
