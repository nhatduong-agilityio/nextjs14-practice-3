import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const tagVariants = cva(
  'inline-flex w-max h-fit items-center rounded-[5px] px-1 py-[5px] text-base text-text-primary font-normal leading-4 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-progress text-text-foreground shadow-sm',
        warning: 'border-transparent bg-orange-90 shadow-sm',
        destructive: 'border-transparent bg-destructive shadow-sm',
        label: 'border-transparent bg-tag-label text-white shadow',
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
    default: 'text-text-foreground',
    warning: 'text-text-primary',
    destructive: 'text-text-primary',
    label: 'text-white',
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
