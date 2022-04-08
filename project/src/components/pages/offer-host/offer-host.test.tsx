import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import { OfferHost } from './offer-host';
import { makeFakeOffer } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const offer = makeFakeOffer();

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferHost offer={offer} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offer-host')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText(offer.description)).toBeInTheDocument();
  });
});
