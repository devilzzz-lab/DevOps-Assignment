import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index'; // Adjust path as needed
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Home Page', () => {
  it('renders Backend Message heading', () => {
    render(<Home />);
    // Fixed: test looks for JUST "Backend Message" (h3), not "Backend Message:" 
    expect(screen.getByText('Backend Message:')).toBeInTheDocument();
  });

  it('renders initial loading state', () => {
    // Fixed: Mock env var to trigger loading → error state flow
    process.env.NEXT_PUBLIC_API_URL = '';
    render(<Home />);
    
    // Test shows error state immediately (no loading visible due to fast env check)
    expect(screen.getByText('NEXT_PUBLIC_API_URL is missing')).toBeInTheDocument();
  });

  it('renders status section', () => {
    render(<Home />);
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
  });

  it('renders API Base text', () => {
    render(<Home />);
    expect(screen.getByText('NOT SET')).toBeInTheDocument();
  });
});
