import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const tagVariants = cva(
  'inline-flex w-max h-fit items-center rounded-[5px] px-1 py-[5px] text-base font-normal leading-4 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-progress text-heading-secondary shadow-sm',
        warning: 'border-transparent bg-orange-90/30 text-orange-90 shadow-sm hover:bg-orange-90/20',
        destructive: 'border-transparent bg-destructive/30 text-destructive shadow hover:bg-destructive/20',
        label: 'border-transparent bg-tag-label/30 text-label-secondary shadow hover:bg-tag-label/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
  icon?: JSX.Element
}

const Tag = ({ className, variant, icon, children, ...props }: TagProps) => {
  const iconColors = {
    default: 'text-heading-secondary',
    warning: 'text-orange-90',
    destructive: 'text-destructive',
    label: 'text-label-secondary',
  }

  const Icon =
    icon &&
    React.cloneElement<React.SVGAttributes<SVGSVGElement>>(icon, {
      className: cn('mr-[3px]', variant && iconColors[variant], icon.props.className),
    })

  return (
    <div className={cn(tagVariants({ variant }), className)} {...props}>
      {Icon} {children}
    </div>
  )
}

export { Tag, tagVariants }
