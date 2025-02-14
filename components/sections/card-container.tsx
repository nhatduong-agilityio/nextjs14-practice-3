import { HTMLAttributes, ReactNode } from 'react'

// Components
import { Heading } from '../ui/heading'
import { MoreIcon } from '@/icons/more-icon'

// Hocs
import { withMoreMenu } from '@/hocs/with-more-menu'

// Types
import { OptionItem } from '@/types/option'

// Utils
import { cn } from '@/utils/cn'

interface CardContainerProps extends HTMLAttributes<HTMLElement> {
  hasTitle?: boolean
  title?: string
  moreMenuTitle?: string
  children?: ReactNode
  menuOptions?: OptionItem[]
  innerRef?: (element: HTMLElement | null) => void
}

const MoreMenu = withMoreMenu(MoreIcon)

export const CardContainer = ({
  hasTitle = true,
  title = 'Cards',
  moreMenuTitle,
  menuOptions,
  className,
  children,
  innerRef,
  ...props
}: CardContainerProps) => {
  return (
    <section
      ref={innerRef}
      className={cn('w-full flex flex-col shadow-sm border border-separator rounded-3xl p-[5px]', className)}
      {...props}
      data-testid='card-container'
    >
      <div
        className={cn(
          'flex justify-between items-center p-[15px] pt-2.5',
          hasTitle && !menuOptions && 'justify-start',
          !hasTitle && menuOptions && 'justify-end',
        )}
        data-testid='card-container-header'
      >
        {hasTitle && (
          <Heading
            headingLevel='h2'
            variant='secondary'
            size='md'
            aria-label='card-container-heading'
            data-testid='card-container-title'
          >
            {title}
          </Heading>
        )}
        {menuOptions && <MoreMenu title={moreMenuTitle} menuOptions={menuOptions} data-testid='more-menu' />}
      </div>
      <div data-testid='card-container-children'>{children}</div>
    </section>
  )
}
