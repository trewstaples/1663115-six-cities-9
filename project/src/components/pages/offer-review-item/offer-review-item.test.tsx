import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import { makeFakeReview } from '../../../utils/mocks/make-fake-review';
import OfferReviewItem from './offer-review-item';

const history = createMemoryHistory();
const review = makeFakeReview();

describe('Component: OfferReviewItem', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <OfferReviewItem review={review} />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('offer-review-item')).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
