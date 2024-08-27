import { cn } from '@/lib/utils'
import { Heading } from '../ui/heading'

export interface CardContainerProps {
  title?: string
  children?: React.ReactNode
}

export const CardContainer = ({ title = 'Cards', children }: CardContainerProps) => {
  return (
    <section className='w-full flex flex-col shadow-sm border border-separator rounded-3xl p-[5px]'>
      <div className='flex justify-between items-center p-[15px] pt-2.5'>
        <Heading headingLevel='h4' variant='secondary' size='md'>
          {title}
        </Heading>
      </div>
      <div className='w-full grid grid-cols-3 gap-30'>{children}</div>
    </section>
  )
}
