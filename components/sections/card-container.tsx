import { memo } from 'react'

// Components
import { Heading } from '../ui/heading'
import { MoreIcon } from '@/icons/more-icon'

// Hocs
import { withMoreMenu } from '../hocs/withMoreMenu'

// Types
import { OptionItem } from '@/lib/types'

export interface CardContainerProps {
  title?: string
  moreMenuTitle?: string
  children?: React.ReactNode
  menuOptions?: OptionItem[]
}

const MoreMenu = withMoreMenu(MoreIcon)

export const CardContainer = memo(({ title = 'Cards', moreMenuTitle, menuOptions, children }: CardContainerProps) => {
  return (
    <section className='w-full flex flex-col shadow-sm border border-separator rounded-3xl p-[5px]'>
      <div className='flex justify-between items-center p-[15px] pt-2.5'>
        <Heading headingLevel='h4' variant='secondary' size='md'>
          {title}
        </Heading>
        {menuOptions && <MoreMenu title={moreMenuTitle} menuOptions={menuOptions} />}
      </div>
      <div className='w-full grid grid-cols-3 gap-30'>{children}</div>
    </section>
  )
})
CardContainer.displayName = 'CardContainer'
