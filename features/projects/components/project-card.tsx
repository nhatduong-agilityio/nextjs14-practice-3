'use client'

import { useRouter } from 'next/navigation'
import { ComponentProps, useCallback, useMemo } from 'react'

// Constants
import { ROUTES } from '@/constants/routes'

// Components
import { MoreIcon } from '@/icons/more-icon'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Text } from '@/components/ui/text'
import { Badge } from '@/components/ui/badge'
import { AttachmentIcon } from '@/icons/attachment-icon'
import { Tag } from '@/components/ui/tag'
import { ActivityIcon } from '@/icons/activity-icon'
import { Progress } from '@/components/ui/progress'

// Types
import { ProjectDetail } from '@/types/project'

// Hocs
import { withMoreMenu } from '@/hocs/with-more-menu'

// Utils
import { cn } from '@/utils/cn'
import { calculateDaysLeft, getInitials } from '@/utils/formats'
import { calculateProjectProgress } from '../utils/project-card'

interface ProjectCardProps extends ComponentProps<typeof Card> {
  variant?: 'column' | 'row'
  project: ProjectDetail
  innerRef?: (element: HTMLElement | null) => void
  isPending?: boolean
}

const MoreMenu = withMoreMenu(MoreIcon)

export const ProjectCard = ({
  variant = 'column',
  project,
  className,
  innerRef,
  isPending,
  ...props
}: ProjectCardProps) => {
  const router = useRouter()

  const { assigned, name, team, attachment, dueDate, taskList, id } = project

  const listProjectActions = [
    {
      name: 'Show Detail',
      action: () => window.open(`${ROUTES.PROJECTS}/${id}`, '_blank'),
    },
    {
      name: 'Delete Project',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Edit Project',
      action: () => null,
      isDisable: true,
    },
  ]

  const hasMoreUsers = assigned.length > 4
  const moreUsers = assigned.length - 4

  const variantTag = useCallback((dueDate: string) => {
    const dayLeft = calculateDaysLeft(dueDate)
    if (dayLeft < 3) return 'destructive'
    if (dayLeft < 10) return 'warning'
    return 'default'
  }, [])

  const progress = useMemo(() => calculateProjectProgress(taskList), [taskList])
  const isVariantRow = variant === 'row'

  const handleNavigateProjectDetail = useCallback(() => {
    router.push(`${ROUTES.PROJECTS}/${id}`)
  }, [id, router])

  return (
    <Card
      ref={innerRef}
      className={cn(
        'flex flex-col w-full cursor-pointer hover:shadow-md',
        isVariantRow && 'flex-row px-[25px] py-[15px] gap-[49px]',
        className,
        isPending && 'opacity-50 pointer-events-none',
      )}
      onClick={handleNavigateProjectDetail}
      {...props}
    >
      <CardHeader className={cn('flex flex-col justify-between items-start', isVariantRow && 'flex-1 p-0')}>
        <div className='w-full flex justify-between items-center'>
          <CardTitle className='truncate'>{name}</CardTitle>
          {!isVariantRow && <MoreMenu title='Project Actions' menuOptions={listProjectActions} />}
        </div>
        <CardDescription>{team}</CardDescription>
      </CardHeader>
      <CardContent className={cn('w-full flex flex-col gap-6', isVariantRow && 'flex-row flex-1 p-0 items-center')}>
        <div className='flex gap-2.5 items-center'>
          <Badge variant='ghost' className='text-label-secondary'>
            <AttachmentIcon width={16} height={16} className='mr-[3px]' /> {attachment.length}
          </Badge>
          <Tag variant={variantTag(dueDate)} icon={<ActivityIcon width={16} height={16} />}>
            {calculateDaysLeft(dueDate)} days left
          </Tag>
        </div>
        <Progress
          value={progress}
          {...(isVariantRow && {
            direction: 'row-reverse',
          })}
        />
      </CardContent>
      <CardFooter className={cn('flex gap-2.5', isVariantRow && 'flex-[0.5] p-0')}>
        {assigned.slice(0, 7).map(({ avatar, userName }, index) => (
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
      </CardFooter>
      {isVariantRow && <MoreMenu title='Project Actions' menuOptions={listProjectActions} />}
    </Card>
  )
}
