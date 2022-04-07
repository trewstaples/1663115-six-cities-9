import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import Loading from './loading';

describe('Component: Loading', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Loading />
      </HistoryRouter>,
    );

    const paragraphElement = screen.getByText('Loading ...');

    expect(paragraphElement).toBeInTheDocument();
  });
});
