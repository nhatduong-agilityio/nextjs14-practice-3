import { memo } from 'react'

// Components
import { Heading } from '../ui/heading'

// Utils
import { cn } from '@/utils/cn'

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const PageHeader = memo(({ title = 'Hi DarkBrain,', children, className, ...props }: PageHeaderProps) => {
  return (
    <div className={cn('w-full flex flex-wrap justify-start items-center mb-8', className)} {...props}>
      <Heading headingLevel='h1'>{title}</Heading>
      {children}
    </div>
  )
})
PageHeader.displayName = 'PageHeader'
