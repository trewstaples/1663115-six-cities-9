import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import OfferPage from './offer-page';
import HistoryRouter from '../../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { makeFakeOffer, makeFakeOffersNearby } from '../../../utils/mocks/make-fake-offer';
import { makeFakeReviews } from '../../../utils/mocks/make-fake-review';

const fakeIsUserAuthorized = true;
const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();
const fakeOffersNearby = makeFakeOffersNearby();

const mockStore = configureMockStore();

const store = mockStore({
  USER: { isUserAuthorize: fakeIsUserAuthorized },
  OFFER_ITEM: { offer: fakeOffer, reviews: fakeReviews, offersNearby: fakeOffersNearby },
});

const history = createMemoryHistory();

describe('Component: OfferPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('offer-page')).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.rating)).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.host.name)).toBeInTheDocument();
  });
});
