import React from 'react'
import { render, screen } from '@testing-library/react'
import { Input, inputVariants } from '../input'

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input data-testid='test-input' />)
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('w-full')
    expect(input).toHaveClass('text-input-foreground')
  })

  it('renders with custom className', () => {
    render(<Input data-testid='test-input' className='custom-class' />)
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('custom-class')
  })

  it('renders with icon', () => {
    const Icon = () => <span data-testid='test-icon'>Icon</span>
    render(<Input data-testid='test-input' icon={<Icon />} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('w-5/6')
  })

  it('renders with prefix label', () => {
    render(<Input data-testid='test-input' prefixLabel={<span>Prefix</span>} />)
    expect(screen.getByText('Prefix')).toBeInTheDocument()
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('w-2/4')
  })

  it('renders with both icon and prefix label', () => {
    const Icon = () => <span data-testid='test-icon'>Icon</span>
    render(<Input data-testid='test-input' icon={<Icon />} prefixLabel={<span>Prefix</span>} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByText('Prefix')).toBeInTheDocument()
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('w-2/4')
  })

  it('renders without separator', () => {
    render(<Input data-testid='test-input' hasSeparator={false} />)
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input data-testid='test-input' ref={ref} />)
    expect(ref.current).toBe(screen.getByTestId('test-input'))
  })

  it('generates correct class names', () => {
    const defaultClasses = inputVariants()
    expect(defaultClasses).toContain('flex h-[38px] w-full bg-transparent')
    expect(defaultClasses).toContain('text-input-foreground')

    const customClasses = inputVariants({ variant: 'default', className: 'custom-class' })
    expect(customClasses).toContain('text-input-foreground')
    expect(customClasses).toContain('custom-class')
  })
})
