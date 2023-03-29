import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Всего/i);
  expect(linkElement).toBeInTheDocument();
});
