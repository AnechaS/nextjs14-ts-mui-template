import { render, screen } from '@testing-library/react';
import Lorem from './lorem';

it('should render correctly', () => {
  render(<Lorem />);
  expect(screen.getByRole('paragraph')).toHaveTextContent('Lorem');
});
