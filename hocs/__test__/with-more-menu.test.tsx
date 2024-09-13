import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { withMoreMenu } from '../with-more-menu'
import '@testing-library/jest-dom'
import { Skeleton } from '@/components/ui/skeleton'

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (callback: () => Promise<any>) => {
    const DynamicComponent = (props: any) => {
      const [Component, setComponent] = React.useState<React.ComponentType | null>(null)

      React.useEffect(() => {
        callback().then((mod) => act(() => setComponent(() => mod.default)))
      }, [])

      if (!Component) {
        return <Skeleton className='w-6 h-6' />
      }

      return <Component {...props} />
    }

    return DynamicComponent
  },
}))

jest.mock('@/components/sections/more-menu', () => ({
  __esModule: true,
  default: ({ children, menuOptions, disabled, title }: any) => (
    <div data-testid='more-menu' data-disabled={disabled} data-title={title}>
      {children}
      <ul>
        {menuOptions.map((option: any) => (
          <li key={option.name}>{option.name}</li>
        ))}
      </ul>
    </div>
  ),
}))

describe('withMoreMenu HOC', () => {
  const TestComponent = () => <div>Test Component</div>
  const menuOptions = [{ name: 'Option 1', action: jest.fn() }]

  it('renders the wrapped component with MoreMenu', async () => {
    const WrappedComponent = withMoreMenu(TestComponent)
    await act(async () => {
      render(<WrappedComponent menuOptions={menuOptions} />)
    })

    expect(screen.getByText('Test Component')).toBeInTheDocument()
    expect(screen.getByTestId('more-menu')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('passes disabled prop to MoreMenu', async () => {
    const WrappedComponent = withMoreMenu(TestComponent)
    await act(async () => {
      render(<WrappedComponent menuOptions={menuOptions} disabled={true} />)
    })

    const moreMenu = screen.getByTestId('more-menu')
    expect(moreMenu).toHaveAttribute('data-disabled', 'true')
  })

  it('passes title prop to MoreMenu', async () => {
    const WrappedComponent = withMoreMenu(TestComponent)
    await act(async () => {
      render(<WrappedComponent menuOptions={menuOptions} title='Custom Title' />)
    })

    const moreMenu = screen.getByTestId('more-menu')
    expect(moreMenu).toHaveAttribute('data-title', 'Custom Title')
  })

  it('renders Skeleton while MoreMenu is loading', () => {
    const WrappedComponent = withMoreMenu(TestComponent)
    render(<WrappedComponent menuOptions={menuOptions} />)

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})
