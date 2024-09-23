import { fireEvent, render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { Dialog } from '@/components/ui/dialog'
import { NavLinks } from '../nav-links'
import { ROUTES } from '@/constants/routes'

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('NavLinks', () => {
  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue('/dashboard')
  })

  it('renders all navigation links', () => {
    render(
      <Dialog>
        <NavLinks />
      </Dialog>,
    )
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Messages')).toBeInTheDocument()
    expect(screen.getByText('Project')).toBeInTheDocument()
    expect(screen.getByText('Schedule')).toBeInTheDocument()
    expect(screen.getByText('Activity')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('highlights the active link', () => {
    render(
      <Dialog>
        <NavLinks />
      </Dialog>,
    )
    const activeLink = screen.getByTestId(`nav-item-${ROUTES.DASHBOARD}`)
    expect(activeLink).toHaveClass('px-5')
  })

  it('renders badges for Messages and Schedule sub-items', () => {
    render(
      <Dialog>
        <NavLinks />
      </Dialog>,
    )

    // Check for Messages badge
    const messagesBadge = screen.getByText('3')
    expect(messagesBadge).toBeInTheDocument()

    // Check for Schedule sub-item badges
    const scheduleLink = screen.getByText('Schedule')
    fireEvent.click(scheduleLink)
  })

  it('expands Schedule sub-items when Schedule is active', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/schedule')
    render(
      <Dialog>
        <NavLinks />
      </Dialog>,
    )
    expect(screen.getByText('In Progress')).toBeInTheDocument()
    expect(screen.getByText('Pending')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })

  it('does not expand Schedule sub-items when Schedule is not active', () => {
    render(
      <Dialog>
        <NavLinks />
      </Dialog>,
    )
    expect(screen.queryByText('In Progress')).not.toBeInTheDocument()
    expect(screen.queryByText('Pending')).not.toBeInTheDocument()
    expect(screen.queryByText('Completed')).not.toBeInTheDocument()
  })
})
