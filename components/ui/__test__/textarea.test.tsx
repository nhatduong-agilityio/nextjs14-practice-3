import React from 'react'
import { render, screen } from '@testing-library/react'
import { Textarea } from '../textarea'

describe('Textarea', () => {
  it('renders with default classes', () => {
    render(<Textarea data-testid='textarea' />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveClass(
      'flex min-h-[60px] w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm',
    )
  })

  it('applies custom className', () => {
    render(<Textarea data-testid='textarea' className='custom-class' />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Textarea data-testid='textarea' placeholder='Enter text here' />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('placeholder', 'Enter text here')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Textarea data-testid='textarea' ref={ref} />)
    expect(ref.current).toBe(screen.getByTestId('textarea'))
  })
})
