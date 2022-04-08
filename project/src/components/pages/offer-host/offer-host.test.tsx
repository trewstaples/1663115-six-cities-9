import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import { OfferHost } from './offer-host';
import { makeFakeOffer } from '../../../utils/mocks/make-fake-offer';

const history = createMemoryHistory();
const fakeOffer = makeFakeOffer();

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferHost offer={fakeOffer} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offer-host')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.description)).toBeInTheDocument();
  });
});
