import { render, screen } from '@testing-library/react'
import { Tag, tagVariants } from '../tag'

describe('Tag', () => {
  it('renders with default variant', () => {
    render(<Tag data-testid='tag'>Default Tag</Tag>)
    const tag = screen.getByTestId('tag')
    expect(tag).toHaveClass('bg-progress text-text-foreground')
  })

  it('applies custom className', () => {
    render(
      <Tag data-testid='custom-tag' className='custom-class'>
        Custom Tag
      </Tag>,
    )
    const tag = screen.getByTestId('custom-tag')
    expect(tag).toHaveClass('custom-class')
  })

  it('renders with icon', () => {
    const TestIcon = () => <span data-testid='test-icon'>Icon</span>
    render(
      <Tag data-testid='icon-tag' icon={<TestIcon />} variant='destructive'>
        Icon Tag
      </Tag>,
    )
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon-tag')).toHaveTextContent('Icon Tag')
  })

  it('generates correct class names with tagVariants', () => {
    const defaultClasses = tagVariants()
    expect(defaultClasses).toContain('bg-progress')
    expect(defaultClasses).toContain('text-text-foreground')

    const customClasses = tagVariants({ variant: 'warning', className: 'custom-class' })
    expect(customClasses).toContain('bg-orange-90')
    expect(customClasses).toContain('custom-class')
  })
})
