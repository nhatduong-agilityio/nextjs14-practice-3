import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from './separator'
import { Label } from './label'
import { Text } from './text'

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
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, icon, ...props }, ref) => {
  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <input
          type={type}
          className={cn(inputVariants({ variant, className }), icon && 'w-5/6')}
          ref={ref}
          {...props}
        />
        {icon && icon}
      </div>
      <Separator />
    </>
  )
})
Input.displayName = 'Input'

export { Input, inputVariants }
