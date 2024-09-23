import { render, screen, fireEvent, act } from '@testing-library/react'
import { Settings } from '../settings'
import { useTheme } from 'next-themes'

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}))

jest.mock('@clerk/nextjs', () => ({
  SignOutButton: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('Settings', () => {
  beforeEach(() => {
    ;(useTheme as jest.Mock).mockReturnValue({
      setTheme: jest.fn(),
      theme: 'light',
    })
  })

  it('renders the Settings component', () => {
    render(<Settings />)
    expect(screen.getByText('Sign Out App')).toBeInTheDocument()
    expect(screen.getByText('Mode Themes')).toBeInTheDocument()
  })

  it('renders the Sign Out button', () => {
    render(<Settings />)
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })

  it('renders theme toggle buttons', () => {
    render(<Settings />)
    expect(screen.getByLabelText('Toggle light mode')).toBeInTheDocument()
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument()
    expect(screen.getByLabelText('Toggle theme system')).toBeInTheDocument()
  })

  it('calls setTheme when a theme button is clicked', () => {
    const setThemeMock = jest.fn()
    ;(useTheme as jest.Mock).mockReturnValue({
      setTheme: setThemeMock,
      theme: 'light',
    })

    render(<Settings />)
    fireEvent.click(screen.getByLabelText('Toggle dark mode'))
    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })

  it('disables the current theme button', () => {
    ;(useTheme as jest.Mock).mockReturnValue({
      setTheme: jest.fn(),
      theme: 'dark',
    })

    render(<Settings />)
    expect(screen.getByLabelText('Toggle dark mode')).toBeDisabled()
  })
})
