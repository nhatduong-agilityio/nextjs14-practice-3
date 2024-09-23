import { render, screen, fireEvent } from '@testing-library/react'
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../select'

describe('Select Components', () => {
  it('renders Select with trigger and value', () => {
    render(
      <Select>
        <SelectTrigger data-testid='select-trigger'>
          <SelectValue placeholder='Select an option' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    )

    expect(screen.getByTestId('select-trigger')).toBeInTheDocument()
    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('applies custom className to SelectTrigger', () => {
    render(
      <Select>
        <SelectTrigger className='custom-trigger'>Select</SelectTrigger>
      </Select>,
    )
    expect(screen.getByText('Select')).toHaveClass('custom-trigger')
  })

  it('applies correct classes to SelectContent', () => {
    render(
      <Select open>
        <SelectContent className='custom-content' data-testid='select-content' />
      </Select>,
    )
    const content = screen.getByTestId('select-content')
    expect(content).toHaveClass('custom-content')
    expect(content).toHaveClass('relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[8px]')
  })

  it('renders SelectSeparator', () => {
    render(
      <Select open>
        <SelectContent>
          <SelectSeparator data-testid='separator' />
        </SelectContent>
      </Select>,
    )
    expect(screen.getByTestId('separator')).toHaveClass('h-px bg-muted')
  })
})
