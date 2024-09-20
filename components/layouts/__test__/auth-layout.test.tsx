import { render, fireEvent } from '@testing-library/react'
import { AuthLayout } from '../auth-layout'
import { usePathname } from 'next/navigation'
import { useDisclosure } from '@/hooks/use-disclosure'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('@/hooks/use-disclosure', () => ({
  useDisclosure: jest.fn(),
}))

describe('AuthLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders Login button if on Sign Up route', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/sign-up')
    ;(useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    })

    const { getByTestId } = render(
      <AuthLayout>
        <div>Test Child Content</div>
      </AuthLayout>,
    )

    const loginButton = getByTestId('auth-main-button')
    expect(loginButton).toHaveTextContent('Create an account')
  })

  it('renders Create an account button if on Sign In route', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/sign-in')
    ;(useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    })

    const { getByTestId } = render(
      <AuthLayout>
        <div>Test Child Content</div>
      </AuthLayout>,
    )

    const createAccountButton = getByTestId('auth-main-button')
    expect(createAccountButton).toHaveTextContent('Login')
  })

  it('calls onOpen when the button is clicked', () => {
    const onOpenMock = jest.fn()

    ;(usePathname as jest.Mock).mockReturnValue('/sign-in')
    ;(useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      onOpen: onOpenMock,
      onClose: jest.fn(),
    })

    const { getByTestId } = render(
      <AuthLayout>
        <div>Test Child Content</div>
      </AuthLayout>,
    )

    const button = getByTestId('auth-main-button')
    fireEvent.click(button)

    expect(onOpenMock).toHaveBeenCalledTimes(1)
  })

  it('displays children content when open', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/sign-in')
    ;(useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    })

    const { getByTestId } = render(
      <AuthLayout>
        <div>Test Child Content</div>
      </AuthLayout>,
    )

    expect(getByTestId('auth-children')).toHaveTextContent('Test Child Content')
  })

  it('calls onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn()

    ;(usePathname as jest.Mock).mockReturnValue('/sign-in')
    ;(useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: onCloseMock,
    })

    const { getByTestId } = render(
      <AuthLayout>
        <div>Test Child Content</div>
      </AuthLayout>,
    )

    const closeButton = getByTestId('auth-close-button')
    fireEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
