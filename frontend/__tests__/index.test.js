import { render, screen, waitFor } from '@testing-library/react'
import Home from '../pages/index.js'

// Mock axios to prevent real API calls
jest.mock('axios')

describe('Home Page', () => {
  it('renders Backend Message heading', () => {
    render(<Home />)
    // Be more specific to avoid multiple matches
    expect(screen.getByText('Backend Message:')).toBeInTheDocument()
  })

  it('renders Backend URL text', () => {
    render(<Home />)
    expect(screen.getByText('Backend URL:')).toBeInTheDocument()
  })

  it('renders initial loading state', () => {
    render(<Home />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders status section', () => {
    render(<Home />)
    expect(screen.getByText(/Status:/i)).toBeInTheDocument()
  })
})
