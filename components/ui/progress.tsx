'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/utils/cn'
import { Text } from './text'

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  direction?: 'column' | 'row' | 'row-reverse'
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, direction = 'column', ...props }, ref) => (
    <div
      className={cn(
        'w-full flex flex-col items-end gap-[5px]',
        direction === 'row' && 'flex-row items-center gap-[15px]',
        direction === 'row-reverse' && 'flex-row-reverse items-center gap-[15px]',
      )}
    >
      <Text className='text-label-secondary leading-4'>{value}%</Text>
      <ProgressPrimitive.Root
        ref={ref}
        aria-label={`${direction}-progress-bar`}
        className={cn('relative h-1 w-full overflow-hidden rounded-full bg-progress', className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className='h-full w-full flex-1 bg-progress-foreground transition-all'
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
