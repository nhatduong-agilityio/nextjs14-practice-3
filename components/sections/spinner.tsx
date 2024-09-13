import { cn } from '@/utils/cn'
import React from 'react'

interface SpinnerProps {
  size?: number
  color?: string
}

export const Spinner = ({ size = 6, color = 'text-primary-foreground' }: SpinnerProps) => {
  return (
    <div className='flex justify-center'>
      <div
        className={cn(
          'animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full',
          `size-${size} ${color}`,
        )}
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}
