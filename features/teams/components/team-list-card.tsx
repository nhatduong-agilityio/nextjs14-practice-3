'use client'

// Constants
import { TEAM_DETAILS } from '@/constants/data'

// Components
import { CardContainer } from '@/components/sections/card-container'
import { TeamCard } from './team-card'
import { AddNewCard } from '@/components/sections/add-new-card'

export const TeamListCard = () => {
  const listActionsTeam = [
    {
      name: 'Add New Teams…',
      action: () => null,
    },
    {
      name: 'Edit Current Teams…',
      action: () => null,
    },
    {
      name: 'Add New Member…',
      action: () => null,
    },
    {
      name: 'Remove Current Member…',
      action: () => null,
    },
  ]

  return (
    <CardContainer title='Team' menuOptions={listActionsTeam}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {TEAM_DETAILS.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
        <AddNewCard title='Add Team' className='min-h-[144px]' />
      </div>
    </CardContainer>
  )
}