import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const textVariants = cva('text-base font-[400]', {
  variants: {
    variant: {
      default: 'text-text-foreground',
      error: 'text-destructive',
      link: 'font-poppins font-medium',
      secondary: 'text-text-secondary',
      label: 'text-text-label',
    },
    size: {
      default: 'leading-6',
      xs: 'text-xs',
      md: 'text-md',
      lg: 'text-[18px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ variant, size, className, ...props }, ref) => {
  return <p ref={ref} className={cn(textVariants({ variant, size, className }))} {...props} />
})
Text.displayName = 'Text'

export { Text, textVariants }
