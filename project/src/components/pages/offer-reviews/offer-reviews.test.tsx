import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import OfferReviews from './offer-reviews';
import { makeFakeReviews } from '../../../utils/mocks/make-fake-review';

const history = createMemoryHistory();
const fakeReviews = makeFakeReviews();

describe('Component: OfferReviews', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferReviews reviews={fakeReviews} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offer-reviews')).toBeInTheDocument();
    expect(screen.getByTestId('offer-review-item')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
