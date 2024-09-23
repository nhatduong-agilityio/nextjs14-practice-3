import { render, screen } from '@testing-library/react'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'

describe('ToggleGroup Components', () => {
  it('renders ToggleGroup with items', () => {
    render(
      <ToggleGroup type='single'>
        <ToggleGroupItem value='a' data-testid='item-a'>
          Item A
        </ToggleGroupItem>
        <ToggleGroupItem value='b' data-testid='item-b'>
          Item B
        </ToggleGroupItem>
      </ToggleGroup>,
    )

    expect(screen.getByTestId('item-a')).toBeInTheDocument()
    expect(screen.getByTestId('item-b')).toBeInTheDocument()
  })

  it('applies correct classes to ToggleGroup', () => {
    render(
      <ToggleGroup type='single' className='custom-group'>
        <ToggleGroupItem value='a'>Item A</ToggleGroupItem>
      </ToggleGroup>,
    )

    const group = screen.getByRole('group')
    expect(group).toHaveClass('flex items-center justify-center gap-1 custom-group')
  })

  it('applies variant and size to ToggleGroupItem', () => {
    render(
      <ToggleGroup type='single'>
        <ToggleGroupItem value='a' variant='outline' size='sm' data-testid='item-a'>
          Item A
        </ToggleGroupItem>
      </ToggleGroup>,
    )

    const item = screen.getByTestId('item-a')
    expect(item).toHaveClass('h-8')
  })

  it('inherits variant and size from ToggleGroup context', () => {
    render(
      <ToggleGroup type='single' variant='outline' size='lg'>
        <ToggleGroupItem value='a' data-testid='item-a'>
          Item A
        </ToggleGroupItem>
      </ToggleGroup>,
    )

    const item = screen.getByTestId('item-a')
    expect(item).toHaveClass('h-10')
  })
})
