import * as React from 'react'
import { cn } from '@/lib/utils'

export const CloseIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m13.412 12 5.277 5.282a1 1 0 1 1-1.415 1.414l-5.278-5.283-5.29 5.282a1 1 0 1 1-1.413-1.415L10.583 12 5.296 6.707A1 1 0 0 1 6.71 5.293l5.288 5.292 5.276-5.268a1 1 0 0 1 1.413 1.416L13.411 12Z'
      clipRule='evenodd'
    />
  </svg>
)
