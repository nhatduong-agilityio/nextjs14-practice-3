import { render, screen } from '@testing-library/react'
import { Heading, headingVariants } from '../heading'

describe('Heading', () => {
  it('renders with default props', () => {
    render(<Heading data-testid='default-heading'>Default Heading</Heading>)
    const heading = screen.getByTestId('default-heading')
    expect(heading.tagName).toBe('H1')
    expect(heading).toHaveClass('text-lg font-semibold text-heading-primary leading-9')
  })

  it('renders with different heading levels', () => {
    const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
    levels.forEach((level) => {
      render(
        <Heading data-testid={`${level}-heading`} headingLevel={level}>
          {level} Heading
        </Heading>,
      )
      const heading = screen.getByTestId(`${level}-heading`)
      expect(heading.tagName).toBe(level.toUpperCase())
    })
  })

  it('renders with secondary variant', () => {
    render(
      <Heading data-testid='secondary-heading' variant='secondary'>
        Secondary Heading
      </Heading>,
    )
    const heading = screen.getByTestId('secondary-heading')
    expect(heading).toHaveClass('text-heading-secondary')
  })

  it('renders with different sizes', () => {
    render(
      <Heading data-testid='lg-heading' size='lg'>
        Lg Heading
      </Heading>,
    )
    const heading = screen.getByTestId('lg-heading')
    expect(heading).toHaveClass('text-xl')
  })

  it('applies custom className', () => {
    render(
      <Heading data-testid='custom-heading' className='custom-class'>
        Custom Heading
      </Heading>,
    )
    const heading = screen.getByTestId('custom-heading')
    expect(heading).toHaveClass('custom-class')
  })

  it('generates correct class names with headingVariants', () => {
    const defaultClasses = headingVariants()
    expect(defaultClasses).toContain('text-heading-primary')
    expect(defaultClasses).toContain('leading-9')

    const customClasses = headingVariants({ variant: 'secondary', size: 'lg', className: 'custom-class' })
    expect(customClasses).toContain('text-heading-secondary')
    expect(customClasses).toContain('leading-[42px]')
    expect(customClasses).toContain('custom-class')
  })
})
