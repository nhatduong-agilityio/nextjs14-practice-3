import * as React from 'react'
import { cn } from '@/lib/utils'

export const ChevronDownIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m12 13.586 4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L12 13.586Z'
      clipRule='evenodd'
    />
  </svg>
)