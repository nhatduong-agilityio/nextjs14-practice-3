'use client'

import { useState } from 'react'

// Constants
import { ARRANGE } from '@/constants/filters'

// Components
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Toggle } from '@/components/ui/toggle'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FilterIcon } from '@/icons/filter-icon'
import { GanttIcon } from '@/icons/gantt-icon'
import { KanBanIcon } from '@/icons/kan-ban-icon'
import { ListIcon } from '@/icons/list-icon'
import { Label } from '../../../components/ui/label'
import { Text } from '../../../components/ui/text'

// Hooks
import { useProjectFilter } from '../hooks/use-project-filter'

export interface ProjectFilterProps {}

export const PROJECT_SORTS = ['Project Name', 'Newest Project', 'Due Date', 'Project Type']
export const PROJECT_FILTERS = ['Newest Added', 'Newest Project', 'Due Date', 'Project Type']

export const ProjectFilter = ({}: ProjectFilterProps) => {
  const { setFilter, getFilter } = useProjectFilter()
  const [filters, setFilters] = useState<string[]>([])
  const [sorts, setSorts] = useState<string[]>([])

  const handleFilters = (value: string) => (isChecked: boolean) => {
    setFilters((prev) => (isChecked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  const handleSorts = (value: string) => (isChecked: boolean) => {
    setSorts((prev) => (isChecked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  const handleArrange = (value: string) => setFilter('arrange', value)

  const filteredLabels = filters.join(', ')
  const sortedLabels = sorts.join(', ')
  const arrangeValue = getFilter('arrange') ?? ARRANGE.KAN_BAN

  return (
    <div className='w-full flex justify-between items-center'>
      <DropdownMenu>
        <DropdownMenuTrigger className='w-auto font-roboto'>
          <Label size='lg' className='text-select-foreground'>
            Show: {''}
          </Label>
          <Text variant='secondary' size='lg' className='text-dropdown truncate max-w-[100px]'>
            {filteredLabels || 'All Projects'}
          </Text>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col w-56 gap-[15px]'>
          {PROJECT_FILTERS.map((item) => (
            <DropdownMenuCheckboxItem key={item} checked={filters.includes(item)} onCheckedChange={handleFilters(item)}>
              {item}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className='flex justify-start items-center gap-[15px]'>
        <DropdownMenu>
          <DropdownMenuTrigger hasSeparator className='w-auto font-roboto rounded-sm bg-card pr-[6px] pl-3'>
            <Label size='md' className='leading-4 text-select-foreground'>
              Show: {''}
            </Label>
            <Text variant='secondary' className='leading-4 text-dropdown truncate max-w-[100px]'>
              {sortedLabels || 'None'}
            </Text>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='flex flex-col w-56 gap-[15px]'>
            {PROJECT_SORTS.map((item) => (
              <DropdownMenuCheckboxItem key={item} checked={sorts.includes(item)} onCheckedChange={handleSorts(item)}>
                {item}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Toggle value='filter' aria-label='Toggle filter' className='group'>
          <FilterIcon className='group-data-[state=on]:text-toggle-foreground' />
        </Toggle>

        <ToggleGroup
          type='single'
          className='gap-0 shadow-xs'
          onValueChange={handleArrange}
          defaultValue={arrangeValue}
        >
          <ToggleGroupItem value={ARRANGE.KAN_BAN} aria-label='Toggle kan ban board' className='group rounded-e-none'>
            <KanBanIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
          <ToggleGroupItem
            value={ARRANGE.LIST}
            aria-label='Toggle list board'
            className='group rounded-none border-x border-separator'
          >
            <ListIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
          <ToggleGroupItem
            value={ARRANGE.GANTT}
            aria-label='Toggle gantt board'
            className='group rounded-s-none'
            disabled
          >
            <GanttIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
