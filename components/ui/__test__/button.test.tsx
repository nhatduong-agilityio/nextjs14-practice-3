import { render, screen } from '@testing-library/react'
import { Button, buttonVariants } from '../button'

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button data-testid='test-button'>Default Button</Button>)
    const button = screen.getByTestId('test-button')
    expect(button).toHaveClass('bg-primary text-primary-foreground')
    expect(button).toHaveClass('h-[38px] w-full px-3.5 py-2.5')
  })

  it('applies custom className', () => {
    render(
      <Button data-testid='custom-button' className='custom-class'>
        Custom Button
      </Button>,
    )
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveClass('custom-class')
  })

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a data-testid='link-button' href='#'>
          Link Button
        </a>
      </Button>,
    )
    const link = screen.getByTestId('link-button')
    expect(link).toHaveClass('bg-primary text-primary-foreground')
  })

  it('generates correct class names with buttonVariants', () => {
    const defaultClasses = buttonVariants()
    expect(defaultClasses).toContain('bg-primary')
    expect(defaultClasses).toContain('text-primary-foreground')

    const customClasses = buttonVariants({ variant: 'outline', size: 'sm', className: 'custom-class' })
    expect(customClasses).toContain('border')
    expect(customClasses).toContain('h-[28px]')
    expect(customClasses).toContain('custom-class')
  })
})
