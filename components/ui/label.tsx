'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const labelVariants = cva('leading-[22px] font-[400] peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
  variants: {
    variant: {
      default: 'text-label',
      secondary: 'text-label-secondary',
      field: 'text-label-field',
    },
    size: {
      default: 'text-xs',
      md: 'text-base',
      lg: 'text-[18px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, variant, size, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ variant, className, size }))} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
