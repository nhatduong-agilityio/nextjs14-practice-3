import * as React from 'react'
import { cn } from '@/utils/cn'

export const AttachmentIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.714 10.794l6.525-6.525a4.333 4.333 0 116.128 6.129l-6.525 6.525a2.668 2.668 0 01-3.728-3.815l6.482-6.482A1 1 0 1116.01 8.04L9.53 14.522a.667.667 0 10.942.943l6.482-6.482a2.333 2.333 0 00-3.3-3.3l-6.481 6.482a4 4 0 005.656 5.657l5.304-5.303a1 1 0 011.414 1.414l-5.303 5.303a6 6 0 01-8.529-8.441z'
    />
  </svg>
)
