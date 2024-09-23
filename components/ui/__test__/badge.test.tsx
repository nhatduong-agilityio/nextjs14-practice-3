import { render, screen } from '@testing-library/react'
import { Badge, badgeVariants } from '../badge'

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toHaveClass('bg-primary text-primary-foreground')
  })

  it('renders with secondary variant', () => {
    render(<Badge variant='secondary'>Secondary Badge</Badge>)
    const badge = screen.getByText('Secondary Badge')
    expect(badge).toHaveClass('bg-secondary text-secondary-foreground')
  })

  it('renders with destructive variant', () => {
    render(<Badge variant='destructive'>Destructive Badge</Badge>)
    const badge = screen.getByText('Destructive Badge')
    expect(badge).toHaveClass('bg-destructive text-destructive-foreground')
  })

  it('renders with outline variant', () => {
    render(<Badge variant='outline'>Outline Badge</Badge>)
    const badge = screen.getByText('Outline Badge')
    expect(badge).toHaveClass('text-foreground')
  })

  it('renders with ghost variant', () => {
    render(<Badge variant='ghost'>Ghost Badge</Badge>)
    const badge = screen.getByText('Ghost Badge')
    expect(badge).toHaveClass('text-foreground border-none px-0')
  })

  it('applies custom className', () => {
    render(<Badge className='custom-class'>Custom Badge</Badge>)
    const badge = screen.getByText('Custom Badge')
    expect(badge).toHaveClass('custom-class')
  })

  it('generates correct class names with badgeVariants', () => {
    const defaultClasses = badgeVariants()
    expect(defaultClasses).toContain('bg-primary')
    expect(defaultClasses).toContain('text-primary-foreground')

    const secondaryClasses = badgeVariants({ variant: 'secondary' })
    expect(secondaryClasses).toContain('bg-secondary')
    expect(secondaryClasses).toContain('text-secondary-foreground')

    const customClasses = badgeVariants({ className: 'custom-class' })
    expect(customClasses).toContain('custom-class')
  })
})
