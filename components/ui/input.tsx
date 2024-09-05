import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from './separator'

const inputVariants = cva(
  'flex h-[38px] w-full bg-transparent py-2.5 text-md font-[400] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-input-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  hasSeparator?: boolean
  icon?: React.ReactNode
  prefixLabel?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ hasSeparator = true, className, type, variant, icon, prefixLabel, ...props }, ref) => {
    return (
      <>
        <div className='w-full flex flex-row justify-start items-center relative'>
          {prefixLabel && prefixLabel}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, className }),
              (icon && prefixLabel) || prefixLabel ? 'w-2/4' : icon ? 'w-5/6' : 'w-full',
            )}
            ref={ref}
            {...props}
          />
          {icon && <div className='absolute right-0'>{icon}</div>}
        </div>
        {hasSeparator && <Separator />}
      </>
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants }
