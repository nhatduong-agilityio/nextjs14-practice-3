import * as React from 'react'
import { cn } from '@/utils/cn'

export const AssignmentIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M8.692 11.278l2.27 2.242 4.256-5.156a1 1 0 011.542 1.272l-4.95 6a1 1 0 01-1.474.076l-3.05-3.01a1 1 0 011.406-1.424z'
      fill='#92929D'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 1h8a7 7 0 017 7v8a7 7 0 01-7 7H8a7 7 0 01-7-7V8a7 7 0 017-7zm0 2a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5H8z'
      fill='#92929D'
    />
  </svg>
)
