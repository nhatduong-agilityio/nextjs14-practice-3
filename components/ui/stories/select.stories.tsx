import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem } from '../select'

import { useCallback, useState } from 'react'
import { TEAM_DETAILS } from '@/constants/data'

const meta = {
  title: 'Select',
  component: () => {
    const [teamId, setTeamId] = useState<string | undefined>()

    const teamOptions = TEAM_DETAILS.map(({ id, name }) => ({ value: id, label: name }))

    const handleValueChange = useCallback((value: string) => setTeamId(value), [])

    return (
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
    )
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
