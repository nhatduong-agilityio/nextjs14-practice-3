import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchInput } from '../search-input'

describe('SearchInput', () => {
  it('renders with default props', () => {
    render(<SearchInput data-testid='search-input' />)
    const input = screen.getByTestId('search-input')
    expect(input).toHaveAttribute('placeholder', 'Search')
    expect(input).toHaveClass('bg-search-input text-search-input-foreground pl-11 pr-2.5 max-w-[105px]')
  })

  it('renders with custom placeholder', () => {
    render(<SearchInput data-testid='search-input' placeholder='Custom Search' />)
    const input = screen.getByTestId('search-input')
    expect(input).toHaveAttribute('placeholder', 'Custom Search')
  })

  it('renders with custom className', () => {
    render(<SearchInput data-testid='search-input' className='custom-class' />)
    const input = screen.getByTestId('search-input')
    expect(input).toHaveClass('custom-class')
  })

  it('renders search icon', () => {
    render(<SearchInput data-testid='search-input' />)
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  it('applies focus styles', () => {
    render(<SearchInput data-testid='search-input' />)
    const input = screen.getByTestId('search-input')
    expect(input).toHaveClass('focus:max-w-full')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<SearchInput data-testid='search-input' ref={ref} />)
    expect(ref.current).toBe(screen.getByTestId('search-input'))
  })
})
