import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import OfferCard from './offer-card';
import { makeFakeOffer } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const offer = makeFakeOffer();

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferCard offer={offer} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offer-card')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
