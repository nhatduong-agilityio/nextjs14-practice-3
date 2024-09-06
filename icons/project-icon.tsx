import * as React from 'react'
import { cn } from '@/utils/cn'

export const ProjectIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='m8.692 11.278 2.27 2.242 4.256-5.156a1 1 0 0 1 1.542 1.272l-4.95 6a1 1 0 0 1-1.474.076l-3.05-3.01a1 1 0 0 1 1.406-1.424Z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 1h8a7 7 0 0 1 7 7v8a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8Z'
      clipRule='evenodd'
    />
  </svg>
)
