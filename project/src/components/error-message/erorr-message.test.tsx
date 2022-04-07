import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import ErrorMessage from './error-message';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ErrorMessage />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('error-alert')).toBeInTheDocument();
  });
});
