import { render, screen } from '@testing-library/react'
import { Label, labelVariants } from '../label'

describe('Label', () => {
  it('renders with default props', () => {
    render(<Label data-testid='test-label'>Test Label</Label>)
    const label = screen.getByTestId('test-label')
    expect(label).toHaveClass('text-label text-xs')
  })

  it('applies custom className', () => {
    render(
      <Label data-testid='custom-label' className='custom-class'>
        Custom Label
      </Label>,
    )
    const label = screen.getByTestId('custom-label')
    expect(label).toHaveClass('custom-class')
  })

  it('generates correct class names with labelVariants', () => {
    const defaultClasses = labelVariants()
    expect(defaultClasses).toContain('text-label')
    expect(defaultClasses).toContain('text-xs')

    const customClasses = labelVariants({ variant: 'secondary', size: 'lg', className: 'custom-class' })
    expect(customClasses).toContain('text-label-secondary')
    expect(customClasses).toContain('text-[18px]')
    expect(customClasses).toContain('custom-class')
  })
})
