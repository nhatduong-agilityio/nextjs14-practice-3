import { render, screen } from '@testing-library/react'
import { Toggle, toggleVariants } from '../toggle'

describe('Toggle', () => {
  it('renders with default props', () => {
    render(<Toggle data-testid='toggle'>Toggle</Toggle>)
    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass('inline-flex items-center justify-center rounded-sm text-sm font-medium')
  })

  it('applies custom className', () => {
    render(
      <Toggle data-testid='custom-toggle' className='custom-class'>
        Toggle
      </Toggle>,
    )
    const toggle = screen.getByTestId('custom-toggle')
    expect(toggle).toHaveClass('custom-class')
  })

  it('generates correct class names with toggleVariants', () => {
    const defaultClasses = toggleVariants()
    expect(defaultClasses).toContain('bg-card')

    const customClasses = toggleVariants({ variant: 'outline', size: 'lg', className: 'custom-class' })
    expect(customClasses).toContain('border border-input bg-transparent')
    expect(customClasses).toContain('h-10 px-3')
    expect(customClasses).toContain('custom-class')
  })
})
