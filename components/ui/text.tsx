import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const textVariants = cva('text-base font-[400]', {
  variants: {
    variant: {
      default: 'text-text-foreground',
      error: 'text-destructive',
    },
    size: {
      default: 'leading-6',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text = ({ variant, size, className, ...props }: TextProps) => {
  return <p className={cn(textVariants({ variant, size, className }))} {...props} />
}
Text.displayName = 'Text'

export { Text, textVariants }
