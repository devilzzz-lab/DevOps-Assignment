// jest.setup.js
import '@testing-library/jest-dom'

// Mock axios completely to prevent API calls
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.reject({ message: 'mocked' }))
}))

// Suppress all console errors during tests
jest.spyOn(console, 'error').mockImplementation(() => {})

global.fetch = jest.fn()
