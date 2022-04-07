import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Footer from './footer';
import HistoryRouter from '../history-router/history-router';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Footer />
      </HistoryRouter>,
    );
    const footerElement = screen.getByTestId('footer');
    const linkElement = screen.getByTestId('footer__logo-link');

    expect(footerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
