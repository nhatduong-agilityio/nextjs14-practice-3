import { forwardRef, HTMLAttributes, memo, ReactNode } from 'react'

// Components
import { Heading } from '../ui/heading'
import { MoreIcon } from '@/icons/more-icon'

// Hocs
import { withMoreMenu } from '../hocs/withMoreMenu'

// Types
import { OptionItem } from '@/lib/types'
import { cn } from '@/lib/utils'

export interface CardContainerProps extends HTMLAttributes<HTMLElement> {
  title?: string
  moreMenuTitle?: string
  children?: ReactNode
  menuOptions?: OptionItem[]
  innerRef?: (element: HTMLElement | null) => void
}

const MoreMenu = withMoreMenu(MoreIcon)

export const CardsContainer = ({
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
    >
      <div className='flex justify-between items-center p-[15px] pt-2.5'>
        <Heading headingLevel='h4' variant='secondary' size='md'>
          {title}
        </Heading>
        {menuOptions && <MoreMenu title={moreMenuTitle} menuOptions={menuOptions} />}
      </div>
      {children}
    </section>
  )
}
