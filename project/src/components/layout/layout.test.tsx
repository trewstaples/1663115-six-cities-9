import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Layout from './layout';
import { render, screen } from '@testing-library/react';

const history = createMemoryHistory();

describe('Component: Layout', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Layout />
      </HistoryRouter>,
    );

    expect(screen.getByTestId('page')).toBeInTheDocument();
  });
});
