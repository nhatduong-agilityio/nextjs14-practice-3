import * as React from 'react'
import { cn } from '@/utils/cn'

export const DropdownIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    viewBox='0 0 16 16'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.293 5.333a.5.5 0 01.39.813l-4.292 5.366a.5.5 0 01-.781 0L3.317 6.146a.5.5 0 01.39-.813h8.586z'
    />
  </svg>
)
