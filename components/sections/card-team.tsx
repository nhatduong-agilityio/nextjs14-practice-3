import { ComponentProps, memo } from 'react'
import Image from 'next/image'

// Models
import { TeamDetail } from '@/lib/models'

// Components
import { Text } from '../ui/text'
import { MoreIcon } from '@/icons/more-icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

// Hocs
import { withMoreMenu } from '../hocs/withMoreMenu'

// Utils
import { cn, getInitials } from '@/lib/utils'

export interface CardTeamProps extends ComponentProps<typeof Card> {
  team: TeamDetail
}

const MoreMenu = withMoreMenu(MoreIcon)

export const CardTeam = memo(({ team, className, ...props }: CardTeamProps) => {
  const { users, name } = team

  const listCardActions = [
    {
      name: 'Show Detail',
      action: () => null,
    },
    {
      name: 'Delete Team',
      action: () => null,
    },
    {
      name: 'Edit Team',
      action: () => null,
    },
  ]

  const hasMoreUsers = users.length > 7
  const moreUsers = users.length - 7

  return (
    <Card className={cn('w-full', className)} {...props}>
      <CardHeader className='flex flex-row justify-between items-start'>
        <div className='flex justify-between items-center gap-5'>
          <Image
            src='https://github.com/shadcn.png'
            alt='Logo of the team'
            width={52}
            height={52}
            style={{
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <CardTitle>{name}</CardTitle>
        </div>
        <MoreMenu title='Team Actions' menuOptions={listCardActions} />
      </CardHeader>
      <CardContent className='w-full flex gap-2.5'>
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
CardTeam.displayName = 'CardTeam'
