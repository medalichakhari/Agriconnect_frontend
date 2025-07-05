import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, it, expect } from 'vitest'
import Home from '../pages/Home'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>
  )
}

describe('Home Page', () => {
  it('renders welcome message', () => {
    renderWithProviders(<Home />)

    expect(screen.getByText(/Welcome to Ariconnect/i)).toBeInTheDocument()
    expect(screen.getByText(/A modern React application/i)).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    renderWithProviders(<Home />)

    expect(screen.getByText('React + TypeScript')).toBeInTheDocument()
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument()
    expect(screen.getByText('shadcn/ui')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    renderWithProviders(<Home />)

    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view on github/i })).toBeInTheDocument()
  })
})
