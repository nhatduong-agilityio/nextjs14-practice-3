import { render, screen } from '@testing-library/react'
import { Progress } from '../progress'

describe('Progress', () => {
  it('renders with default props', () => {
    render(<Progress value={50} />)
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveClass('relative h-1 w-full overflow-hidden rounded-full bg-progress')
  })

  it('renders with custom className', () => {
    render(<Progress value={50} className='custom-class' />)
    expect(screen.getByRole('progressbar')).toHaveClass('custom-class')
  })

  it('renders with different directions', () => {
    const directions = ['column', 'row', 'row-reverse'] as const
    directions.forEach((direction) => {
      render(<Progress value={50} direction={direction} data-testid={`progress-${direction}`} />)
      const container = screen.getByTestId(`progress-${direction}`).parentElement
      expect(container).toHaveClass(`flex-${direction === 'column' ? 'col' : direction}`)
    })
  })

  it('applies correct transform style based on value', () => {
    render(<Progress value={75} />)
    const indicator = screen.getByRole('progressbar').firstChild
    expect(indicator).toHaveStyle('transform: translateX(-25%)')
  })

  it('renders with aria-label', () => {
    render(<Progress value={undefined} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'column-progress-bar')
  })
})
