import { createMemoryHistory } from 'history';
import FavoritesEmpty from './favorites-empty';
import HistoryRouter from '../../history-router/history-router';
import { render, screen } from '@testing-library/react';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <FavoritesEmpty />
      </HistoryRouter>,
    );

    expect(screen.getByText('Favorites (empty)')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });
});
