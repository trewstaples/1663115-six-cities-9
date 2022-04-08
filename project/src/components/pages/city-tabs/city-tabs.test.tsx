import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../history-router/history-router';
// import CityTabs from './city-tabs';

const history = createMemoryHistory();

// const activeCityTab = 'Paris';

describe('Component: CityTabs', () => {
  it('should render correctly', () => {
    render(<HistoryRouter history={history}>{/* <CityTabs activeCityTab={activeCityTab} /> */}</HistoryRouter>);

    expect(screen.getByText('Cities')).toBeInTheDocument();
    expect(screen.getByTestId('city-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('city-tab-item')).toBeInTheDocument();
  });
});
