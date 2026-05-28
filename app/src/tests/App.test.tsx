// import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Simple truthy test', () => {
  it('should expect 1 to equal 1', () => {
    expect(1).toEqual(1);
  });
});

describe('App component', () => {
  it('renders a message that starts with the word "Welcome"', () => {
    render(<App />);
    expect(screen.getByText(/^Welcome/i)).toBeInTheDocument();
  });
});
