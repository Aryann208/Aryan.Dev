import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
test('menu closes after navigation and restores focus on Escape', () => {
  render(<Navbar />);
  const toggle = screen.getByRole('button', { name: /Menu/ });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
});
