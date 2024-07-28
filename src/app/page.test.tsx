import { render, screen } from '@testing-library/react';
import Page from './page';

it('Sample', () => {
  render(<Page />);
  expect(screen.getByRole('heading')).toHaveTextContent(
    'Material UI - Next.js App Router example in TypeScript',
  );
});
