import { render, fireEvent } from '@testing-library/react'
import { Header } from '../header'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

// Mock the useDebounce hook
jest.mock('@/hooks/use-debounce', () => ({
  useDebounce: jest.fn(),
}))

describe('Header', () => {
  const mockPush = jest.fn()
  const mockPathname = '/dashboard'
  const mockSearchParams = new URLSearchParams()

  beforeEach(() => {
    // Reset the mocks before each test
    ;(usePathname as jest.Mock).mockReturnValue(mockPathname)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)
    ;(useDebounce as jest.Mock).mockImplementation((value) => value)
  })

  it('renders the brand link', () => {
    const { getByTestId } = render(<Header />)

    // Check if the brand link is rendered
    expect(getByTestId('brand-link')).toBeInTheDocument()
  })

  it('renders the search input with initial value', () => {
    const { getByTestId } = render(<Header />)

    // Check if the search input is rendered with the initial value
    expect(getByTestId('search-input')).toBeInTheDocument()
    expect(getByTestId('search-input')).toHaveValue('')
  })

  it('updates search input value when typing', () => {
    const { getByTestId } = render(<Header />)

    // Type in the search input
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Test search' } })

    // Check if the input value is updated
    expect(getByTestId('search-input')).toHaveValue('Test search')
  })

  it('renders the "New" button', () => {
    const { getByTestId } = render(<Header />)

    // Check if the "New" button is rendered
    expect(getByTestId('new-button')).toBeInTheDocument()
  })

  it('renders the notification button', () => {
    const { getByTestId } = render(<Header />)

    // Check if the notification button is rendered
    expect(getByTestId('notification-button')).toBeInTheDocument()
  })

  it('renders the avatar', () => {
    const { getByTestId } = render(<Header />)

    // Check if the avatar is rendered
    expect(getByTestId('avatar')).toBeInTheDocument()

    // Check if the avatar fallback is rendered
    expect(getByTestId('avatar-fallback')).toHaveTextContent('CN')
  })

  it('renders the Gantt icon button', () => {
    const { getByTestId } = render(<Header />)

    // Check if the Gantt icon button is rendered for mobile
    expect(getByTestId('gantt-icon-button')).toBeInTheDocument()
  })

  it('updates the search input value and pushes the updated URL when debounced value changes', () => {
    const { getByTestId } = render(<Header />)

    // Mock the debounced value
    ;(useDebounce as jest.Mock).mockReturnValue('Test search')

    // Simulate user typing in the search input
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Test search' } })

    // Check if the search input value is updated
    expect(getByTestId('search-input')).toHaveValue('Test search')

    // Check if router.push was called with the correct URL
    expect(mockPush).toHaveBeenCalledWith(`${mockPathname}?name=Test+search`, { scroll: false })
  })

  it('removes search parameter when input is cleared', () => {
    const { getByTestId } = render(<Header />)

    // Simulate user clearing the search input
    fireEvent.change(getByTestId('search-input'), { target: { value: '' } })

    // Check if the search input value is updated
    expect(getByTestId('search-input')).toHaveValue('')

    // Check if router.push was called with the URL without search parameter
    expect(mockPush).toHaveBeenCalledWith(`${mockPathname}?`, { scroll: false })
  })
})
