'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded border shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground',
  {
    variants: {
      variant: {
        default: 'border-primary data-[state=checked]:bg-primary',
        sun: 'border-orange-20 data-[state=checked]:bg-orange-20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, variant, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants({ variant, className }))} {...props}>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <CheckIcon className='h-4 w-4' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
