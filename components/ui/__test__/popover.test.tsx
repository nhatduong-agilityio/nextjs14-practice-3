import { render, screen, fireEvent } from '@testing-library/react'
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose } from '../popover'

describe('Popover Components', () => {
  it('renders Popover with trigger and content', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid='popover-trigger'>Open</PopoverTrigger>
        <PopoverContent data-testid='popover-content'>
          <p>Popover content</p>
          <PopoverClose data-testid='popover-close'>Close</PopoverClose>
        </PopoverContent>
      </Popover>,
    )

    const trigger = screen.getByTestId('popover-trigger')
    fireEvent.click(trigger)

    expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('renders PopoverAnchor', () => {
    render(
      <Popover>
        <PopoverAnchor data-testid='popover-anchor'>Anchor</PopoverAnchor>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    )
    expect(screen.getByTestId('popover-anchor')).toBeInTheDocument()
  })

  it('applies custom className to PopoverContent', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid='popover-content' className='custom-class'>
          Content
        </PopoverContent>
      </Popover>,
    )
    const content = screen.getByTestId('popover-content')
    expect(content).toHaveClass('custom-class')
  })

  it('closes Popover when PopoverClose is clicked', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid='popover-trigger'>Open</PopoverTrigger>
        <PopoverContent data-testid='popover-content'>
          <PopoverClose data-testid='popover-close'>Close</PopoverClose>
        </PopoverContent>
      </Popover>,
    )

    fireEvent.click(screen.getByTestId('popover-trigger'))
    expect(screen.getByTestId('popover-content')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('popover-close'))
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()
  })
})
