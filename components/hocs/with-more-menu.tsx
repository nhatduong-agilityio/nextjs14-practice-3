import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton'
import { OptionItem } from '@/lib/types'

const MoreMenu = dynamic(() => import('../sections/more-menu'), {
  loading: () => <Skeleton className='w-6 h-6' />,
})

export interface WithMoreMenuProps {}

type Props<P> = Omit<P, keyof WithMoreMenuProps> & {
  menuOptions: OptionItem[]
  disabled?: boolean
  title?: string
}

export const withMoreMenu = <P extends WithMoreMenuProps>(WrappedComponent: React.ComponentType<P>) => {
  const WithMoreMenuComponent = (props: Props<P>) => {
    const { menuOptions, disabled, title, ...rest } = props

    return (
      <MoreMenu disabled={disabled} menuOptions={menuOptions} title={title}>
        <WrappedComponent disabled={disabled} {...(rest as unknown as P)} />
      </MoreMenu>
    )
  }

  WithMoreMenuComponent.displayName = WrappedComponent.displayName || 'WithMoreMenuComponent'

  return WithMoreMenuComponent
}
