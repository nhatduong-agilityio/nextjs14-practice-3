import { render, screen, fireEvent } from '@testing-library/react'
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetPortal,
  SheetOverlay,
} from '../sheet'

describe('Sheet Components', () => {
  it('renders Sheet with all subcomponents', () => {
    render(
      <Sheet open>
        <SheetTrigger data-testid='sheet-trigger'>Open</SheetTrigger>
        <SheetContent data-testid='sheet-content'>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <div>Content</div>
          <SheetFooter>
            <SheetClose data-testid='sheet-close'>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    )

    fireEvent.click(screen.getByTestId('sheet-trigger'))
    expect(screen.getByTestId('sheet-content')).toBeInTheDocument()
    expect(screen.getByText('Sheet Title')).toBeInTheDocument()
    expect(screen.getByText('Sheet Description')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByTestId('sheet-close')).toBeInTheDocument()
  })

  it('renders SheetContent with different sides', () => {
    const sides = ['top', 'right', 'bottom', 'left'] as const
    sides.forEach((side) => {
      render(
        <Sheet open>
          <SheetContent side={side} data-testid={`sheet-content-${side}`}>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Sheet Description</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>,
      )
      const content = screen.getByTestId(`sheet-content-${side}`)
      expect(content).toHaveClass(`data-[state=open]:slide-in-from-${side}`)
    })
  })

  it('applies custom className to SheetContent', () => {
    render(
      <Sheet open>
        <SheetContent className='custom-content' data-testid='sheet-content'>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    )
    expect(screen.getByTestId('sheet-content')).toHaveClass('custom-content')
  })

  it('renders SheetHeader with correct classes', () => {
    render(<SheetHeader data-testid='sheet-header'>Header Content</SheetHeader>)
    expect(screen.getByTestId('sheet-header')).toHaveClass('flex flex-col space-y-2 text-center sm:text-left')
  })

  it('renders SheetFooter with correct classes', () => {
    render(<SheetFooter data-testid='sheet-footer'>Footer Content</SheetFooter>)
    expect(screen.getByTestId('sheet-footer')).toHaveClass(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    )
  })

  it('renders SheetTitle with correct classes', () => {
    render(
      <Sheet open>
        <SheetTitle data-testid='sheet-title'>Title</SheetTitle>
      </Sheet>,
    )
    expect(screen.getByTestId('sheet-title')).toHaveClass('text-lg font-semibold text-foreground')
  })

  it('renders SheetDescription with correct classes', () => {
    render(
      <Sheet open>
        <SheetDescription data-testid='sheet-description'>Description</SheetDescription>
      </Sheet>,
    )
    expect(screen.getByTestId('sheet-description')).toHaveClass('text-sm text-muted-foreground')
  })

  it('renders SheetPortal', () => {
    render(
      <Sheet open>
        <SheetPortal>
          <SheetOverlay data-testid='sheet-overlay' />
          <div data-testid='portal-content'>Portal Content</div>
        </SheetPortal>
      </Sheet>,
    )
    expect(screen.getByTestId('portal-content')).toBeInTheDocument()
  })
})
