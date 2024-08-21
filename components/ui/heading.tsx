import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const headingVariants = cva('text-lg font-semibold', {
  variants: {
    variant: {
      default: 'text-heading-primary',
    },
    size: {
      default: 'leading-9',
      lg: 'leading-[42px] text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ variant, size, headingLevel = 'h1', className, children, ...props }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children)

  return <Heading className={cn(headingVariants({ variant, size, className }))} {...props} />
}
Heading.displayName = 'Heading'

export { Heading, headingVariants }
