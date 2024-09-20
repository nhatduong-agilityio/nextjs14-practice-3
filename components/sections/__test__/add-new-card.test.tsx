import { render } from '@testing-library/react'
import { AddNewCard } from '../add-new-card'

describe('AddNewCard', () => {
  it('renders with default title "Add"', () => {
    const { getByTestId } = render(<AddNewCard />)

    // Check if the AddNewCard is rendered
    expect(getByTestId('add-new-card')).toBeInTheDocument()

    // Check if the default title is rendered
    expect(getByTestId('card-title')).toHaveTextContent('Add')
  })

  it('renders with a custom title', () => {
    const customTitle = 'New Project'
    const { getByTestId } = render(<AddNewCard title={customTitle} />)

    // Check if the custom title is rendered
    expect(getByTestId('card-title')).toHaveTextContent(customTitle)
  })

  it('renders the PlusIcon', () => {
    const { getByTestId } = render(<AddNewCard />)

    // Check if the plus icon wrapper is rendered
    expect(getByTestId('plus-icon-wrapper')).toBeInTheDocument()
  })

  it('applies additional classes passed via className prop', () => {
    const { getByTestId } = render(<AddNewCard className='custom-class' />)

    // Check if the custom class is applied
    expect(getByTestId('add-new-card')).toHaveClass('custom-class')
  })
})
