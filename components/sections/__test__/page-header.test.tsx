import { render, screen } from '@testing-library/react'
import { PageHeader } from '../page-header'

describe('PageHeader', () => {
  it('renders with default title', () => {
    render(<PageHeader />)
    expect(screen.getByRole('heading', { level: 1, name: 'Hi DarkBrain,' })).toBeInTheDocument()
  })

  it('renders with custom title', () => {
    const customTitle = 'Welcome to the Dashboard'
    render(<PageHeader title={customTitle} />)
    expect(screen.getByRole('heading', { level: 1, name: customTitle })).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <PageHeader>
        <button>Test Button</button>
      </PageHeader>,
    )
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const customClass = 'custom-header'
    render(<PageHeader className={customClass} />)
    expect(screen.getByRole('heading', { level: 1 }).parentElement).toHaveClass(customClass)
  })

  it('passes through additional props', () => {
    render(<PageHeader data-testid='custom-header' />)
    expect(screen.getByTestId('custom-header')).toBeInTheDocument()
  })
})
