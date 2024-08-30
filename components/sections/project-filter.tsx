'use client'

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
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Text } from '../ui/text'
import { Separator } from '../ui/separator'

export interface ProjectFilterProps {}

export const PROJECT_SORTS = ['Project Name', 'Newest Project', 'Due Date', 'Project Type']
export const PROJECT_FILTERS = ['Newest Added', 'Newest Project', 'Due Date', 'Project Type']

export const ProjectFilter = ({}: ProjectFilterProps) => {
  const [filters, setFilters] = useState<string[]>([])
  const [sorts, setSorts] = useState<string[]>([])

  const handleFilters = (value: string) => (isChecked: boolean) => {
    setFilters((prev) => (isChecked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  const handleSorts = (value: string) => (isChecked: boolean) => {
    setSorts((prev) => (isChecked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  const filteredLabels = filters.join(', ')
  const sortedLabels = sorts.join(', ')

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

        <ToggleGroup type='single' className='gap-0 shadow-xs'>
          <ToggleGroupItem value='bold' aria-label='Toggle kan ban board' className='group rounded-e-none'>
            <KanBanIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
          <ToggleGroupItem
            value='italic'
            aria-label='Toggle list board'
            className='group rounded-none border-x border-separator'
          >
            <ListIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
          <ToggleGroupItem value='underline' aria-label='Toggle gantt board' className='group rounded-s-none'>
            <GanttIcon className='group-data-[state=on]:text-toggle-foreground' />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
