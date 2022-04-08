import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ErrorMessage from './error-message';
import HistoryRouter from '../history-router/history-router';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  USER: { error: 'Unknown' },
});

describe('Component: ErrorMessage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ErrorMessage />
        </HistoryRouter>
      </Provider>,
    );

    const errorElement = screen.getByTestId('error-alert');
    expect(errorElement).toBeInTheDocument();
  });
});
