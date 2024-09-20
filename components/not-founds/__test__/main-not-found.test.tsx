import { render } from '@testing-library/react'
import { MainNotFound } from '../main-not-found'

describe('MainNotFound', () => {
  it('renders the "Not Found" heading', () => {
    const { getByTestId } = render(<MainNotFound />)

    // Check if the heading is rendered with correct text
    expect(getByTestId('not-found-heading')).toHaveTextContent('Not Found')
  })

  it('renders the "Could not find requested resource" text', () => {
    const { getByTestId } = render(<MainNotFound />)

    // Check if the description text is rendered
    expect(getByTestId('not-found-text')).toHaveTextContent('Could not find requested resource')
  })

  it('renders a link to return home', () => {
    const { getByTestId } = render(<MainNotFound />)

    // Check if the "Return Home" link is rendered
    const linkElement = getByTestId('not-found-link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/')
  })
})
