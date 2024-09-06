import * as React from 'react'
import { cn } from '@/utils/cn'

export const SearchIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M4.683 4.683a9.16 9.16 0 1 0 12.954 12.954A9.16 9.16 0 0 0 4.683 4.683Zm1.414 1.414a7.16 7.16 0 1 1 10.126 10.126A7.16 7.16 0 0 1 6.097 6.097Z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='m22.094 20.282-4.13-4.129c-.942-.943-2.356.471-1.413 1.414l4.13 4.13c.942.943 2.356-.472 1.413-1.415Z'
    />
  </svg>
)
