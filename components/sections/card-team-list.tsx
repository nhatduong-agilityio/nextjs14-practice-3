'use client'

import { TEAM_DETAILS } from '@/constants/data'
import { CardsContainer } from './cards-container'
import { CardTeam } from './card-team'
import { CardAddNew } from './card-add-new'

export const CardTeamList = () => {
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
    <CardsContainer title='Team' menuOptions={listActionsTeam}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {TEAM_DETAILS.map((team) => (
          <CardTeam key={team.id} team={team} />
        ))}
        <CardAddNew title='Add Team' className='min-h-[144px]' />
      </div>
    </CardsContainer>
  )
}
