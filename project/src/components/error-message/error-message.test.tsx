import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-message';
import HistoryRouter from '../history-router/history-router';

describe('Component: ErrorMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ErrorMessage />
      </HistoryRouter>,
    );

    const errorElement = screen.getByTestId('error-alert');
    expect(errorElement).toBeInTheDocument();
  });
});
