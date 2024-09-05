import * as React from 'react'
import { cn } from '@/lib/utils'

export const CheckIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.704 9.972a1 1 0 00-1.408 1.421l5.826 5.768a1 1 0 001.46-.057l8.174-9.45a1 1 0 00-1.512-1.308l-7.475 8.64-5.065-5.014z'
    />
  </svg>
)
