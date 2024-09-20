import { render, fireEvent } from '@testing-library/react'
import { MainError } from '../main-error'

describe('MainError', () => {
  it('renders error message and button', () => {
    // Arrange
    const error = new Error('Test error message')
    const resetMock = jest.fn()

    // Act
    const { getByTestId } = render(<MainError error={error} reset={resetMock} />)

    // Assert
    // Check if the error message is displayed
    expect(getByTestId('global-error-heading')).toHaveTextContent('Test error message')

    // Check if the "Try again" button is rendered
    expect(getByTestId('global-error-button')).toBeInTheDocument()
  })

  it('calls reset function when button is clicked', () => {
    // Arrange
    const error = new Error('Test error message')
    const resetMock = jest.fn()

    // Act
    const { getByTestId } = render(<MainError error={error} reset={resetMock} />)

    // Act again
    fireEvent.click(getByTestId('global-error-button'))

    // Assert
    expect(resetMock).toHaveBeenCalledTimes(1)
  })
})
