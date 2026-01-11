import { render, screen } from '@testing-library/react'
import Home from '../pages/index.js'

// Mock axios to prevent real API calls
jest.mock('axios');

describe('Home Page', () => {
  it('renders Backend Message heading', () => {
    render(<Home />);
    expect(screen.getByText('Backend Message:')).toBeInTheDocument();  // ✅ Fixed
  });

  it('renders API Base text', () => {  // ✅ Fixed name + text
    render(<Home />);
    expect(screen.getByText('API Base:')).toBeInTheDocument();
  });

  it('renders initial loading state', () => {
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders status section', () => {
    render(<Home />);
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
  });
});
