'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const separatorVariants = cva('shrink-0 bg-separator', {
  variants: {
    variant: {
      default: 'bg-separator',
      dashed: 'border-separator border-t-[1.5px] border-dashed bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', variant, decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        separatorVariants({ className, variant }),
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator, separatorVariants }
