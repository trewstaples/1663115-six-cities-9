import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import OffersList from './offers-list';
import { makeFakeOffers } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const fakeActiveCityTab = 'Paris';
const fakeOffers = makeFakeOffers();

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OffersList activeCityTab={fakeActiveCityTab} offers={fakeOffers} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offers-list')).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffers.length} places to stay in ${fakeActiveCityTab}`)).toBeInTheDocument();
    expect(screen.getByTestId('offer-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
