import { render, screen, fireEvent } from '@testing-library/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from '../dialog'

describe('Dialog Components', () => {
  it('renders Dialog with trigger and content', () => {
    render(
      <Dialog>
        <DialogTrigger data-testid='dialog-trigger'>Open</DialogTrigger>
        <DialogContent data-testid='dialog-content'>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>Footer Content</DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    const trigger = screen.getByTestId('dialog-trigger')
    fireEvent.click(trigger)

    expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog Description')).toBeInTheDocument()
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('applies correct classes to DialogContent', () => {
    render(
      <Dialog open>
        <DialogContent data-testid='dialog-content'>
          <DialogTitle data-testid='dialog-title'>Title</DialogTitle>
          Content
          <DialogDescription data-testid='dialog-description'>Description</DialogDescription>{' '}
        </DialogContent>
      </Dialog>,
    )
    const content = screen.getByTestId('dialog-content')
    expect(content).toHaveClass(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[750px] translate-x-[-50%] translate-y-[-50%]',
    )
  })

  it('renders close button in DialogContent', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle data-testid='dialog-title'>Title</DialogTitle>
          Content
          <DialogDescription data-testid='dialog-description'>Description</DialogDescription>{' '}
        </DialogContent>
      </Dialog>,
    )
    const closeButton = screen.getByLabelText('dialog-close-button')
    expect(closeButton).toBeInTheDocument()
  })

  it('applies correct classes to DialogHeader', () => {
    render(
      <Dialog>
        <DialogHeader data-testid='dialog-header'>Header Content</DialogHeader>
      </Dialog>,
    )
    const header = screen.getByTestId('dialog-header')
    expect(header).toHaveClass('flex flex-col space-y-1.5 text-center sm:text-left font-poppins')
  })

  it('applies correct classes to DialogFooter', () => {
    render(
      <Dialog>
        <DialogFooter data-testid='dialog-footer'>Footer Content</DialogFooter>
      </Dialog>,
    )
    const footer = screen.getByTestId('dialog-footer')
    expect(footer).toHaveClass('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2')
  })

  it('applies correct classes to DialogTitle', () => {
    render(
      <Dialog>
        <DialogTitle data-testid='dialog-title'>Title</DialogTitle>
      </Dialog>,
    )
    const title = screen.getByTestId('dialog-title')
    expect(title).toHaveClass('text-lg font-semibold leading-none tracking-tight font-poppins')
  })

  it('applies correct classes to DialogDescription', () => {
    render(
      <Dialog>
        <DialogDescription data-testid='dialog-description'>Description</DialogDescription>
      </Dialog>,
    )
    const description = screen.getByTestId('dialog-description')
    expect(description).toHaveClass('text-sm text-muted-foreground font-roboto')
  })

  it('renders DialogPortal correctly', () => {
    render(
      <Dialog open>
        <DialogPortal>
          <DialogOverlay data-testid='dialog-overlay'>
            <div data-testid='portal-content'>Portal Content</div>
          </DialogOverlay>
        </DialogPortal>
      </Dialog>,
    )
    const overlay = screen.getByTestId('dialog-overlay')
    expect(overlay).toHaveClass('fixed inset-0 z-50 bg-black/80')
    expect(screen.getByTestId('portal-content')).toBeInTheDocument()
  })

  it('renders DialogClose and triggers close action', () => {
    const onCloseMock = jest.fn()
    render(
      <Dialog open onOpenChange={onCloseMock}>
        <DialogContent>
          <DialogTitle data-testid='dialog-title'>Title</DialogTitle>
          <DialogClose data-testid='dialog-close'>Close</DialogClose>
          <DialogDescription data-testid='dialog-description'>Description</DialogDescription>{' '}
        </DialogContent>
      </Dialog>,
    )
    const closeButton = screen.getByTestId('dialog-close')
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })
})
