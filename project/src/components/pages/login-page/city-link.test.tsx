import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
import CityLink from './city-link';

const history = createMemoryHistory();
const fakeCityTab = 'Paris';

describe('Component: CityLink', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <CityLink />
      </HistoryRouter>,
    );

    expect(screen.getByText(fakeCityTab)).toBeInTheDocument();
  });
});
