import React, { memo } from 'react'
import { cn } from '@/utils/cn'

interface SpinnerProps {
  size?: number
  color?: string
}

export const Spinner = memo(({ size = 6, color = 'text-primary-foreground' }: SpinnerProps) => (
  <div className='flex justify-center'>
    <div
      className={cn(
        'animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full',
        `${color} w-${size} h-${size}`,
      )}
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
))
Spinner.displayName = 'Spinner'
