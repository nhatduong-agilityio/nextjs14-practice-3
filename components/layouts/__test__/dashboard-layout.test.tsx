import { render } from '@testing-library/react'
import { DashboardLayout } from '../dashboard-layout'

jest.mock('../../sections/header.tsx', () => ({
  Header: jest.fn(() => <div data-testid='mock-header' />),
}))

jest.mock('../../sections/side-nav', () => ({
  SideNav: jest.fn(() => <div data-testid='mock-sidenav' />),
}))

describe('DashboardLayout', () => {
  it('renders the Header component', () => {
    const { getByTestId } = render(
      <DashboardLayout>
        <div>Test Child Content</div>
      </DashboardLayout>,
    )

    // Check if Header component is rendered
    expect(getByTestId('mock-header')).toBeInTheDocument()
  })

  it('renders the SideNav component in large screens', () => {
    // Mock window size to large screen (lg and above)
    global.innerWidth = 1024
    global.dispatchEvent(new Event('resize'))

    const { getByTestId } = render(
      <DashboardLayout>
        <div>Test Child Content</div>
      </DashboardLayout>,
    )

    // Check if SideNav is rendered
    expect(getByTestId('mock-sidenav')).toBeInTheDocument()
  })

  it('renders children inside the layout', () => {
    const { getByTestId } = render(
      <DashboardLayout>
        <div data-testid='test-children'>Test Child Content</div>
      </DashboardLayout>,
    )

    // Check if children content is rendered
    expect(getByTestId('dashboard-children')).toHaveTextContent('Test Child Content')
  })

  it('does not render the SideNav component on small screens', () => {
    // Mock window size to small screen
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    const { queryByTestId } = render(
      <DashboardLayout>
        <div>Test Child Content</div>
      </DashboardLayout>,
    )

    // SideNav should not be rendered on small screens
    expect(queryByTestId('dashboard-header-content')).toBeNull()
  })
})
