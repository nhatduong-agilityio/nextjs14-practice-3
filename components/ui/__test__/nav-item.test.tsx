import React from 'react'
import { render, screen } from '@testing-library/react'
import { NavItem } from '../nav-item'
import { Dialog } from '../dialog'

describe('NavItem', () => {
  const defaultProps = {
    label: 'Test Item',
    url: '/test',
  }

  it('renders with default props', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} />
      </Dialog>,
    )
    const link = screen.getByTestId(`nav-item-${defaultProps.url}`)
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('h-[52px] w-full flex justify-between items-center py-2.5')
  })

  it('renders as active', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} isActive />
      </Dialog>,
    )
    const link = screen.getByTestId(`nav-item-${defaultProps.url}`)
    expect(link).toHaveClass('pr-5')
    expect(screen.getByText('Test Item')).toHaveClass('text-text-link-selected font-semibold animate-fade-in-right')
  })

  it('renders as sub item', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} isSubItem />
      </Dialog>,
    )
    expect(screen.getByText('Test Item')).toHaveClass('font-normal')
  })

  it('renders with icon', () => {
    const TestIcon = () => <span data-testid='test-icon'>Icon</span>
    render(
      <Dialog>
        <NavItem {...defaultProps} icon={<TestIcon />} />
      </Dialog>,
    )
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('renders with suffix content', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} suffixContent={<span>Suffix</span>} />
      </Dialog>,
    )
    expect(screen.getByText('Suffix')).toBeInTheDocument()
  })

  it('renders with sub item indicator', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} hasSubItem />
      </Dialog>,
    )
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument()
  })

  it('renders with active sub item indicator', () => {
    render(
      <Dialog>
        <NavItem {...defaultProps} hasSubItem isActive />
      </Dialog>,
    )
    expect(screen.getByTestId('chevron-up-icon')).toBeInTheDocument()
  })
})
