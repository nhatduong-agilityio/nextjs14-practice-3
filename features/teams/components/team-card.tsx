import { ComponentProps, memo } from 'react'
import Image from 'next/image'

// Components
import { Text } from '@/components/ui/text'
import { MoreIcon } from '@/icons/more-icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Hocs
import { withMoreMenu } from '@/hocs/with-more-menu'

// Utils
import { cn } from '@/utils/cn'
import { getInitials } from '@/utils/formats'

// Types
import { TeamDetail } from '@/types/team'

interface TeamCardProps extends ComponentProps<typeof Card> {
  team: TeamDetail
  isOutline?: boolean
}

const MoreMenu = withMoreMenu(MoreIcon)

export const TeamCard = memo(({ team, className, isOutline = false, ...props }: TeamCardProps) => {
  const { users, name } = team

  const listCardActions = [
    {
      name: 'Show Detail',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Delete Team',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Edit Team',
      action: () => null,
      isDisable: true,
    },
  ]

  const hasMoreUsers = users.length > 7
  const moreUsers = users.length - 7

  return (
    <Card className={cn('w-full cursor-pointer hover:shadow-md', isOutline && 'shadow-none', className)} {...props}>
      <CardHeader className={cn('flex flex-row justify-between items-start', isOutline && 'p-0 pb-[15px]')}>
        <div className={cn('flex justify-between items-center gap-5', isOutline && 'gap-2.5')}>
          <Image
            src='https://github.com/shadcn.png'
            alt='Logo of the team'
            width={isOutline ? 32 : 52}
            height={isOutline ? 32 : 52}
            style={{
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <CardTitle className={cn(isOutline && 'text-base')}>{name}</CardTitle>
        </div>
        {!isOutline && <MoreMenu title='Team Actions' menuOptions={listCardActions} />}
      </CardHeader>
      <CardContent className={cn('w-full flex gap-2.5 flex-wrap', isOutline && 'p-0 pb-[15px]')}>
        {users.slice(0, 7).map(({ avatar, userName }, index) => (
          <div
            key={userName}
            className='flex justify-center items-center border border-separator rounded-full w-8 h-8 p-[1px]'
          >
            <Avatar size='xs'>
              <AvatarImage src={avatar} alt={`Avatar of the user-${index} in team`} />
              <AvatarFallback>{getInitials(userName)}</AvatarFallback>
            </Avatar>
          </div>
        ))}
        {hasMoreUsers && (
          <div className='flex justify-center items-center border border-separator-secondary rounded-full w-8 h-8 p-[1px]'>
            <Text size='xs' className='font-poppins text-label-field'>
              +{moreUsers}
            </Text>
          </div>
        )}
      </CardContent>
    </Card>
  )
})
TeamCard.displayName = 'TeamCard'
