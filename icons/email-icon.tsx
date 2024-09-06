import * as React from 'react'
import { cn } from '@/utils/cn'

export const EmailIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M4 4h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3ZM3 9.362V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.362l-7.28 5.096a3 3 0 0 1-3.44 0L3 9.362Zm17.997-2.44-8.424 5.897a1 1 0 0 1-1.146 0L3.003 6.923A1 1 0 0 1 4 6h16a1 1 0 0 1 .997.923Z'
      clipRule='evenodd'
    />
  </svg>
)
