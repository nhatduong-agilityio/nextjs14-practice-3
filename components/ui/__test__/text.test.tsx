import { render, screen } from '@testing-library/react'
import { Text, textVariants } from '../text'

describe('Text', () => {
  it('renders with default props', () => {
    render(<Text data-testid='default-text'>Default Text</Text>)
    const text = screen.getByTestId('default-text')
    expect(text).toHaveClass('text-base font-[400] text-text-foreground leading-6')
  })

  it('applies custom className', () => {
    render(
      <Text data-testid='custom-text' className='custom-class'>
        Custom Text
      </Text>,
    )
    const text = screen.getByTestId('custom-text')
    expect(text).toHaveClass('custom-class')
  })

  it('generates correct class names with textVariants', () => {
    const defaultClasses = textVariants()
    expect(defaultClasses).toContain('text-text-foreground')
    expect(defaultClasses).toContain('leading-6')

    const customClasses = textVariants({ variant: 'error', size: 'lg', className: 'custom-class' })
    expect(customClasses).toContain('text-destructive')
    expect(customClasses).toContain('text-[18px]')
    expect(customClasses).toContain('custom-class')
  })
})
