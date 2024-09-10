'use client'

import { memo } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// Constants
import { PROJECT_DETAILS } from '@/constants/data'

// Components
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { DescriptionIcon } from '@/icons/description-icon'
import { Button } from '@/components/ui/button'
import { AttachmentIcon } from '@/icons/attachment-icon'
import { TaskListIcon } from '@/icons/task-list-icon'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { ScheduleIcon } from '@/icons/schedule-icon'
import { MessagesIcon } from '@/icons/messages-icon'
import { CommentCard } from './comment-card'
import { CommentFileInput } from './comment-file-input'

// Utils
import { formatDate, getInitials, getTimeAgo } from '@/utils/formats'
import { calculateProjectProgress } from '../utils/project-card'

interface ProjectDetailContentProps {
  projectId: string
}

export const ProjectDetailContent = memo(({ projectId }: ProjectDetailContentProps) => {
  const project = PROJECT_DETAILS.find((project) => project.id === projectId)

  if (!project) return notFound()

  const { name, owner, createdDate, assigned, dueDate, description, attachment, taskList, comments } = project
  const timeAgo = getTimeAgo(createdDate)
  const formattedDueDate = formatDate(dueDate)
  const progress = calculateProjectProgress(taskList)

  return (
    <article className='flex flex-col w-full py-8 px-10'>
      <div className='flex flex-col gap-[3px]'>
        <Heading headingLevel='h2'>{name}</Heading>
        <Text>
          Added by <span className='text-primary'>{owner.userName}</span>, {timeAgo}
        </Text>
      </div>
      <div className='flex gap-32 mt-[26px]'>
        <div className='flex flex-col gap-2.5'>
          <Heading headingLevel='h4' size='xs'>
            ASSIGNED TO
          </Heading>
          <div className='flex gap-2.5'>
            {assigned.map(({ avatar, userName }, index) => (
              <div
                key={userName}
                className='flex justify-center items-center border border-separator rounded-full w-8 h-8 p-[1px]'
              >
                <Avatar size='sm'>
                  <AvatarImage src={avatar} alt={`Avatar of the user-${index} assigned in project`} />
                  <AvatarFallback>{getInitials(userName)}</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <Heading headingLevel='h4' size='xs'>
            DUE DATE
          </Heading>
          <Text variant='label' size='md' className='font-medium mt-[3px]'>
            {formattedDueDate}
          </Text>
        </div>
      </div>
      <Separator className='my-30' />
      <div className='flex gap-5'>
        <DescriptionIcon />
        <div className='flex flex-col w-full gap-[13px]'>
          <Heading headingLevel='h4' className='text-base text-text-label'>
            Description
          </Heading>
          <Text className='line-clamp-5'>{description}</Text>
          <Button variant='link' size='text' className='w-fit font-normal mt-[7px]'>
            Show Full Description
          </Button>
        </div>
      </div>
      <div className='flex gap-5 mt-10'>
        <AttachmentIcon />
        <div className='flex flex-col w-full gap-[13px]'>
          <Heading headingLevel='h4' className='text-base text-text-label'>
            Attachment
          </Heading>
          <div className='flex gap-[13px] w-full flex-wrap'>
            {attachment.map(({ id, fileName, url }) => {
              return (
                <div key={id} className='flex flex-col gap-2.5'>
                  <Image
                    src={url}
                    alt={fileName}
                    width={300}
                    height={185}
                    style={{ objectFit: 'cover', height: 'auto', width: 'auto' }}
                    className='rounded-[5px]'
                    priority
                  />
                  <Text size='xs'>{fileName}</Text>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 mt-10'>
        <div className='flex w-full gap-[13px] items-center justify-start'>
          <TaskListIcon />
          <Heading headingLevel='h4' className='text-base text-text-label'>
            Task List
          </Heading>
        </div>
        <Progress value={progress} direction='row' />
        <div className='flex flex-col gap-5 mt-[5px]'>
          {taskList.map(({ id, title, dueDate, assigned }) => {
            return (
              <div key={id} className='flex items-center gap-5'>
                <Checkbox className='w-[19px] h-[19px]' variant='leaf' />
                <div className='flex items-center gap-2.5'>
                  <Text size='md' className='leading-[26px] text-checkbox'>
                    {title}
                  </Text>
                  <Badge variant='ghost' className='text-select-foreground leading-4'>
                    <ScheduleIcon width={16} height={16} className='mr-1 text-select-foreground' />
                    {formatDate(dueDate)}
                  </Badge>
                  <div className='flex items-center gap-2.5 flex-wrap'>
                    {assigned.map(({ id, userName, avatar }, index) => {
                      return (
                        <Badge key={id} variant='ghost' className='text-label-secondary leading-4'>
                          <Avatar className='w-[18px] h-[18px] mr-[5px]'>
                            <AvatarImage src={avatar} alt={`Avatar of the user-${index} assigned in task`} />
                            <AvatarFallback>{getInitials(userName)}</AvatarFallback>
                          </Avatar>
                          {userName}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-5 mt-10'>
        <div className='flex w-full gap-[13px] items-center justify-start'>
          <MessagesIcon />
          <Heading headingLevel='h4' className='text-base text-text-label'>
            Comments ({comments.length})
          </Heading>
        </div>
        <div>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
        <CommentFileInput
          onSubmit={(content) => {
            console.log('Comment:', content)
            // Handle the submission logic here
          }}
        />
      </div>
    </article>
  )
})
ProjectDetailContent.displayName = 'ProjectDetailContent'
