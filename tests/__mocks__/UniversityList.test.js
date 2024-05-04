import React from 'react';
import { render, screen } from '@testing-library/react';
import UniversityList from '../../src/screens/UniversityList';

// Mock dependencies
jest.mock('../../src/components/DeleteModal/modal.css', () => ({}));
jest.mock('../../src/hooks/useUniversites', () => ({
  useUniversites: () => ({
    data: [
      { id: 1, name: 'University A' },
      { id: 2, name: 'University B' }
    ],
    dataUpdatedAt: Date.now() // Simulate data update time
  })
}));
jest.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <div>{children}</div>,
}));

describe('UniversityList Component', () => {
  test('renders university list', () => {
    render(<UniversityList />);

    // Verify that universities are rendered
    expect(screen.getByText(/University A/i)).toBeInTheDocument();
    expect(screen.getByText(/University B/i)).toBeInTheDocument();
  });

  // Add more test cases as needed
});
