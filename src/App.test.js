import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Example test - TODO - change to a test that tests hooks
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
 // expect(linkElement).toBeInTheDocument();
});
