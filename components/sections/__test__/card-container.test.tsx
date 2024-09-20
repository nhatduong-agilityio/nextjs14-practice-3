import { act, render, waitFor } from '@testing-library/react'
import { CardContainer } from '../card-container'

describe('CardContainer', () => {
  it('renders the card container', () => {
    const { getByTestId } = render(<CardContainer />)

    // Check if the card container is rendered
    expect(getByTestId('card-container')).toBeInTheDocument()
  })

  it('renders with default title "Cards"', () => {
    const { getByTestId } = render(<CardContainer />)

    // Check if the default title is rendered
    expect(getByTestId('card-container-title')).toHaveTextContent('Cards')
  })

  it('renders with a custom title', () => {
    const customTitle = 'Custom Title'
    const { getByTestId } = render(<CardContainer title={customTitle} />)

    // Check if the custom title is rendered
    expect(getByTestId('card-container-title')).toHaveTextContent(customTitle)
  })

  it('does not render title if hasTitle is false', () => {
    const { queryByTestId } = render(<CardContainer hasTitle={false} />)

    // Check if the title is not rendered
    expect(queryByTestId('card-container-title')).not.toBeInTheDocument()
  })

  it('renders the children content', () => {
    const { getByTestId } = render(
      <CardContainer>
        <p>Child content</p>
      </CardContainer>,
    )

    // Check if the children are rendered
    expect(getByTestId('card-container-children')).toHaveTextContent('Child content')
  })

  it('renders MoreMenu when menuOptions are provided', async () => {
    const menuOptions = [{ name: 'Option 1', action: () => null }]

    const { getByTestId } = render(<CardContainer menuOptions={menuOptions} moreMenuTitle='Options' hasTitle={false} />)

    await waitFor(() => {
      expect(getByTestId('more-menu')).toBeInTheDocument()
    })
  })
})
