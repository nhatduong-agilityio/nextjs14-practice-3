import * as React from 'react'
import { cn } from '@/utils/cn'

export const NotificationIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M14.98 4.64a3 3 0 0 0-5.957 0 7.224 7.224 0 0 0-4.244 6.582v5.018l-1.67 3.31A1 1 0 0 0 4 21h5.171a3.001 3.001 0 0 0 5.659 0H20a1 1 0 0 0 .893-1.45l-1.67-3.31v-5.018a7.224 7.224 0 0 0-4.244-6.581Zm2.35 12.289L18.377 19H5.626l1.046-2.071a1 1 0 0 0 .107-.451v-5.256a5.222 5.222 0 0 1 10.445 0v5.256a1 1 0 0 0 .107.45Z'
      clipRule='evenodd'
    />
  </svg>
)
