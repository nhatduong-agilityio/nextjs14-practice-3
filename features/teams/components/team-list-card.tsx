'use client'

import { memo, useEffect } from 'react'

// Components
import { CardContainer } from '@/components/sections/card-container'
import { TeamCard } from './team-card'
import { AddNewCard } from '@/components/sections/add-new-card'
import { useToast } from '@/hooks/use-toast'
import { TeamDetail } from '@/types/team'
import { OptionItem } from '@/types/option'

interface TeamListCardProps {
  teams?: TeamDetail[]
  error?: string
}

export const TeamListCard = memo(({ teams, error }: TeamListCardProps) => {
  const { toast } = useToast()

  const listActionsTeam: OptionItem[] = [
    {
      name: 'Add New Teams…',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Edit Current Teams…',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Add New Member…',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Remove Current Member…',
      action: () => null,
      isDisable: true,
    },
  ]

  useEffect(() => {
    if (!teams && error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error || 'Failed to fetch teams. Please try again.',
      })
    }
  }, [error, teams, toast])

  return (
    <CardContainer title='Team' menuOptions={listActionsTeam}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {teams && teams.map((team) => <TeamCard key={team.id} team={team} />)}
        <AddNewCard title='Add Team' className='min-h-[144px]' />
      </div>
    </CardContainer>
  )
})
TeamListCard.displayName = 'TeamListCard'
