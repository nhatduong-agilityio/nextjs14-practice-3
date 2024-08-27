import { memo, PropsWithChildren } from 'react'

// Components
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { CloseIcon } from '@/icons/close-icon'

// Types
import { OptionItem } from '@/lib/types'

// Utils
import { cn } from '@/lib/utils'

export interface MoreMenuProps {
  menuOptions: OptionItem[]
  disabled?: boolean
  title?: string
}

const MoreMenu = memo(
  ({ disabled, menuOptions, title = 'List Actions', children }: PropsWithChildren<MoreMenuProps>) => {
    return (
      <Popover>
        <PopoverTrigger
          test-id='popover-trigger'
          disabled={disabled}
          onClick={(e) => e.stopPropagation()}
          className={cn(disabled && 'opacity-50')}
        >
          {children}
        </PopoverTrigger>
        <PopoverContent className='w-[218px]' side='bottom' align='end'>
          <div className={cn('w-full flex justify-between items-center mb-[15px]', !title && 'justify-end')}>
            {title && (
              <Label size='md' className='font-medium leading-4 text-popover-foreground'>
                {title}
              </Label>
            )}
            <PopoverClose onClick={(e) => e.stopPropagation()}>
              <CloseIcon width={16} height={16} />
            </PopoverClose>
          </div>

          <div className='flex flex-col gap-3.5'>
            {menuOptions.map(({ name, action }) => {
              return (
                <PopoverClose asChild className='cursor-pointer' key={name}>
                  <Label
                    onClick={(e) => {
                      e.stopPropagation()
                      requestAnimationFrame(action)
                    }}
                    className='leading-4 text-popover-secondary hover:text-popover-foreground hover:font-medium'
                  >
                    {name}
                  </Label>
                </PopoverClose>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    )
  },
)
MoreMenu.displayName = 'MoreMenu'

export default MoreMenu
