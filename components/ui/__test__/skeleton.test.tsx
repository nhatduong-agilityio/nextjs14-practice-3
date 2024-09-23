import { render, screen } from '@testing-library/react'
import { Skeleton } from '../skeleton'

describe('Skeleton', () => {
  it('renders with default classes', () => {
    render(<Skeleton data-testid='skeleton' />)
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveClass('animate-pulse rounded-md bg-primary/10')
  })

  it('applies custom className', () => {
    render(<Skeleton data-testid='skeleton' className='custom-class' />)
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Skeleton data-testid='skeleton' aria-label='Loading' />)
    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveAttribute('aria-label', 'Loading')
  })
})
