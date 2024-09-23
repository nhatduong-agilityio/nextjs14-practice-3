import { render, screen, fireEvent } from '@testing-library/react'
import MoreMenu, { MoreMenuProps } from '../more-menu'

const mockMenuOptions = [
  { name: 'Option 1', action: jest.fn() },
  { name: 'Option 2', action: jest.fn() },
  { name: 'Option 3', action: jest.fn(), isDisable: true },
]

const defaultProps: MoreMenuProps = {
  menuOptions: mockMenuOptions,
  title: 'Test Menu',
}

describe('MoreMenu', () => {
  it('renders the trigger button', () => {
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    expect(screen.getByText('Open Menu')).toBeInTheDocument()
  })

  it('opens the menu when trigger is clicked', () => {
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    expect(screen.getByText('Test Menu')).toBeInTheDocument()
  })

  it('renders all menu options', () => {
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    mockMenuOptions.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument()
    })
  })

  it('calls the action when a menu option is clicked', () => {
    jest.useFakeTimers()
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    fireEvent.click(screen.getByText('Option 1'))
    jest.runAllTimers()
    expect(mockMenuOptions[0].action).toHaveBeenCalled()
    jest.useRealTimers()
  })

  it('does not call the action for disabled options', () => {
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    fireEvent.click(screen.getByText('Option 3'))
    expect(mockMenuOptions[2].action).not.toHaveBeenCalled()
  })

  it('closes the menu when close button is clicked', () => {
    render(<MoreMenu {...defaultProps}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    fireEvent.click(screen.getByTestId('popover-close'))
    expect(screen.queryByText('Test Menu')).not.toBeInTheDocument()
  })

  it('renders without a title when not provided', () => {
    const propsWithoutTitle = { ...defaultProps, title: undefined }
    render(<MoreMenu {...propsWithoutTitle}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    expect(screen.queryByText('Test Menu')).not.toBeInTheDocument()
  })

  it('renders without a title is empty', () => {
    const propsWithoutTitle = { ...defaultProps, title: '' }
    render(<MoreMenu {...propsWithoutTitle}>Open Menu</MoreMenu>)
    fireEvent.click(screen.getByText('Open Menu'))
    expect(screen.queryByText('Test Menu')).not.toBeInTheDocument()
  })

  it('disables the trigger button when disabled prop is true', () => {
    render(
      <MoreMenu {...defaultProps} disabled>
        Open Menu
      </MoreMenu>,
    )
    expect(screen.getByText('Open Menu')).toHaveAttribute('aria-disabled', 'true')
  })
})
