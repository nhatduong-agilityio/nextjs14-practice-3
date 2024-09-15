'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

// Constants
import { ROUTES } from '@/constants/routes'
import { NAVIGATION_LABELS } from '@/constants/navigation'

// Components
import { ActivityIcon } from '@/icons/activity-icon'
import { DashboardIcon } from '@/icons/dashboard-icon'
import { MessagesIcon } from '@/icons/messages-icon'
import { ProjectIcon } from '@/icons/project-icon'
import { ScheduleIcon } from '@/icons/schedule-icon'
import { SettingsIcon } from '@/icons/settings-icon'
import { NavItem } from '../ui/nav-item'
import { Badge } from '../ui/badge'

// Types
import { NavigationItem } from '@/types/navigation'

const NAVIGATION_LINKS: NavigationItem[] = [
  {
    label: NAVIGATION_LABELS.DASHBOARD,
    url: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    label: NAVIGATION_LABELS.MESSAGES,
    url: ROUTES.MESSAGES,
    icon: <MessagesIcon />,
  },
  { label: NAVIGATION_LABELS.PROJECT, url: ROUTES.PROJECTS, icon: <ProjectIcon /> },
  {
    label: NAVIGATION_LABELS.SCHEDULE,
    url: ROUTES.SCHEDULE,
    icon: <ScheduleIcon />,
    hasSubItem: true,
    subNavigationItem: [
      {
        label: NAVIGATION_LABELS.IN_PROGRESS,
        url: ROUTES.IN_PROGRESS,
      },
      {
        label: NAVIGATION_LABELS.PENDING,
        url: ROUTES.PENDING,
      },
      {
        label: NAVIGATION_LABELS.COMPLETED,
        url: ROUTES.COMPLETED,
      },
    ],
  },
  {
    label: NAVIGATION_LABELS.ACTIVITY,
    url: ROUTES.ACTIVITY,
    icon: <ActivityIcon />,
  },
  {
    label: NAVIGATION_LABELS.SETTINGS,
    url: ROUTES.SETTINGS,
    icon: <SettingsIcon />,
  },
]

export const NavLinks = () => {
  const pathname = usePathname()
  const messages = 3
  const inProgressSchedule = 8
  const pendingSchedule = 2
  const completedSchedule = 3

  const suffixContentMapping = useMemo(
    () => [
      {
        key: NAVIGATION_LABELS.MESSAGES,
        suffixContent: messages && <Badge variant='destructive'>{messages}</Badge>,
      },
      {
        key: NAVIGATION_LABELS.IN_PROGRESS,
        suffixContent: inProgressSchedule && (
          <Badge variant='ghost' className='text-label-secondary'>
            {inProgressSchedule}
          </Badge>
        ),
      },
      {
        key: NAVIGATION_LABELS.PENDING,
        suffixContent: pendingSchedule && (
          <Badge variant='ghost' className='text-label-secondary'>
            {pendingSchedule}
          </Badge>
        ),
      },
      {
        key: NAVIGATION_LABELS.COMPLETED,
        suffixContent: completedSchedule && (
          <Badge variant='ghost' className='text-label-secondary'>
            {completedSchedule}
          </Badge>
        ),
      },
    ],
    [],
  )

  /**
   * Combines the navigation links with their corresponding suffix content.
   * The suffix content is retrieved from the `suffixContentMapping` array, which maps each navigation link label to its corresponding suffix content.
   * The function also handles the case where a navigation link has sub-items, by mapping the suffix content to each sub-item as well.
   * @returns An array of combined navigation links with their suffix content.
   */
  const combinedNavigationLinks = useMemo(
    () =>
      NAVIGATION_LINKS.map((navItem) => {
        const matchedItem = suffixContentMapping.find((item) => item.key === navItem.label)
        const matchedSubItem = navItem.subNavigationItem?.map((subItem) => {
          const subRemoteData = suffixContentMapping.find((item) => item.key === subItem.label)
          return { ...subItem, suffixContent: subRemoteData?.suffixContent }
        })
        return {
          ...navItem,
          suffixContent: matchedItem?.suffixContent,
          subNavigationItem: matchedSubItem,
        }
      }),
    [suffixContentMapping],
  )

  /**
   * Renders the navigation links with their corresponding suffix content.
   * The function maps over the `combinedNavigationLinks` array and renders each navigation item using the `renderNavItem` function.
   * The `renderNavItem` function is responsible for rendering a single navigation item, including any sub-items if they exist.
   * The function also handles the active state of the navigation items, highlighting the current item and its sub-items.
   * @returns An array of JSX elements representing the rendered navigation links.
   */
  const renderNavLinks = useMemo(() => {
    const renderNavItem = (
      { url, label, icon, subNavigationItem, hasSubItem, suffixContent }: NavigationItem,
      isSubItem = false,
    ): JSX.Element => {
      // The condition for rendering sub-items now includes pathname.startsWith(url), which keeps sub-items visible when any of them are selected.
      const isActive = pathname === url || (hasSubItem && pathname.startsWith(url))

      return (
        <div key={`nav-item-${label}`}>
          <NavItem
            label={label}
            url={url}
            icon={icon}
            isActive={isActive}
            isSubItem={isSubItem}
            hasSubItem={hasSubItem}
            suffixContent={suffixContent}
          />
          {subNavigationItem && isActive && (
            <div className='ml-6'>{subNavigationItem.map((subItem) => renderNavItem(subItem, true))}</div>
          )}
        </div>
      )
    }

    return combinedNavigationLinks.map((item) => renderNavItem(item))
  }, [pathname, combinedNavigationLinks])

  return <div className='flex flex-col gap-2.5'>{renderNavLinks}</div>
}
