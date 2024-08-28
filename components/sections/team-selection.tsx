'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TEAM_DETAILS } from '@/constants/data'
import { useCallback, useState } from 'react'
import { CardTeam } from './card-team'
import { Button } from '../ui/button'

export const TeamSelection = () => {
  const [teamId, setTeamId] = useState<string | undefined>()

  const teamOptions = TEAM_DETAILS.map(({ id, name }) => ({ value: id, label: name }))

  const handleValueChange = useCallback((value: string) => setTeamId(value), [])

  const teamDetail = TEAM_DETAILS.find((team) => team.id === teamId)

  return (
    <div className='flex flex-col'>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='TEAMS' />
        </SelectTrigger>
        <SelectContent className='w-full'>
          <SelectGroup>
            <SelectLabel>Teams</SelectLabel>
            {teamOptions.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {teamDetail && <CardTeam className='my-[15px]' team={teamDetail} isOutline />}

      <Button variant='ghost' size='text' className='justify-start font-medium'>
        + ADD NEW TEAM
      </Button>
    </div>
  )
}