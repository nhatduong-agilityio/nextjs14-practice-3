import { memo } from 'react'
import { Comment } from '@/lib/models'
import { CardContainer } from './card-container'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { formatDate, getInitials } from '@/lib/utils'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'

interface CommentCardProps {
  comment: Comment
}

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  const { owner, content, createdDate } = comment

  const commentActions = [
    {
      name: 'Delete Comment',
      action: () => null,
    },
  ]

  return (
    <div className='relative'>
      <div className='border-4 border-card-secondary rounded-full absolute top-0 left-0 z-10'>
        <Avatar size='sm'>
          <AvatarImage src={owner.avatar} alt={`Avatar of the user-${owner.id} commented in project`} />
          <AvatarFallback>{getInitials(owner.userName)}</AvatarFallback>
        </Avatar>
      </div>
      <CardContainer
        hasTitle={false}
        className='relative ml-6 bg-card-foreground w-[calc(100%-24px)] shadow-none border-none'
        moreMenuTitle='Comment Actions'
        menuOptions={commentActions}
      >
        <div className='absolute left-5 top-[15px] w-[calc(100%-75px)] flex justify-between items-center'>
          <Heading headingLevel='h5' variant='secondary' className='text-base leading-6'>
            {owner.userName}
          </Heading>
          <Text size='xs'>{formatDate(createdDate)}</Text>
        </div>
        <div className='p-[15px] pt-0'>
          <Text>{content}</Text>
        </div>
      </CardContainer>
    </div>
  )
})
CommentCard.displayName = 'CommentCard'
