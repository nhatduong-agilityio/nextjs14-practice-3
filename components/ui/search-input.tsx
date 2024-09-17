import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'
import { SearchIcon } from '@/icons/search-icon'

const searchInputVariants = cva(
  'w-full h-[38px] bg-transparent text-base font-poppins font-semibold rounded-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-search-input text-search-input-foreground pl-11 pr-2.5 max-w-[105px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchInputVariants> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = 'Search', className, type, variant, ...props }, ref) => {
    return (
      <div className='flex flex-row justify-start items-center relative'>
        <input
          type={type}
          className={cn('focus:max-w-full', searchInputVariants({ className, variant }))}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <SearchIcon className='absolute left-0 ml-2.5' />
      </div>
    )
  },
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
