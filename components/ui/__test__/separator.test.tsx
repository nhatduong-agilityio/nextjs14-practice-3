import { render, screen } from '@testing-library/react'
import { Separator, separatorVariants } from '../separator'

describe('Separator', () => {
  it('renders horizontal separator by default', () => {
    render(<Separator data-testid='separator' />)
    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('h-[1px] w-full')
  })

  it('renders vertical separator', () => {
    render(<Separator data-testid='separator' orientation='vertical' />)
    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('h-full w-[1px]')
  })

  it('applies default variant', () => {
    render(<Separator data-testid='separator' />)
    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('bg-separator')
  })

  it('applies dashed variant', () => {
    render(<Separator data-testid='separator' variant='dashed' />)
    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('border-separator border-t-[1.5px] border-dashed bg-transparent')
  })

  it('applies custom className', () => {
    render(<Separator data-testid='separator' className='custom-class' />)
    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('custom-class')
  })

  it('generates correct class names with separatorVariants', () => {
    const defaultClasses = separatorVariants()
    expect(defaultClasses).toContain('bg-separator')

    const dashedClasses = separatorVariants({ variant: 'dashed' })
    expect(dashedClasses).toContain('border-dashed')
  })
})
