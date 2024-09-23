import { render, screen } from '@testing-library/react'
import { Spinner } from '../spinner'

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner.firstChild).toHaveClass('w-6 h-6 text-primary-foreground')
  })

  it('renders with custom size', () => {
    render(<Spinner size={8} />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner.firstChild).toHaveClass('w-8 h-8')
  })

  it('renders with custom color', () => {
    render(<Spinner color='text-secondary' />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner.firstChild).toHaveClass('text-secondary')
  })

  it('has correct accessibility attributes', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveAttribute('aria-label', 'loading')
  })

  it('contains the correct screen reader text', () => {
    render(<Spinner />)
    expect(screen.getByText('Loading...')).toHaveClass('sr-only')
  })
})
