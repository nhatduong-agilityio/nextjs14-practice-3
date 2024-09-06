import { ComponentProps, memo } from 'react'

// Components
import { Card } from '@/components/ui/card'
import { PlusIcon } from '@/icons/plus-icon'
import { Heading } from '../ui/heading'

// Utils
import { cn } from '@/utils/cn'

export interface AddNewCardProps extends ComponentProps<typeof Card> {
  title?: string
}

export const AddNewCard = memo(({ className, title = 'Add', ...props }: AddNewCardProps) => {
  return (
    <Card
      className={cn(
        'flex justify-center items-center w-full h-full border border-separator border-dashed bg-transparent gap-2.5 cursor-pointer hover:border-primary hover:bg-card',
        className,
      )}
      {...props}
    >
      <div className='bg-white w-[38px] h-[38px] flex justify-center items-center rounded-full'>
        <PlusIcon className='text-primary' width={20} height={20} />
      </div>
      <Heading headingLevel='h6' className='font-medium' size='md'>
        {title}
      </Heading>
    </Card>
  )
})
AddNewCard.displayName = 'AddNewCard'
