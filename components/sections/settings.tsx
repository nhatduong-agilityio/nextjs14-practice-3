'use client'

import { useTheme } from 'next-themes'
import { SignOutButton } from '@clerk/nextjs'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

// Components
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { SettingsIcon } from '@/icons/settings-icon'
import { Heading } from '@/components/ui/heading'
import { Spinner } from './spinner'

export const Settings = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChangeTheme = (value: string) => {
    setTheme(value)
  }

  if (!mounted) {
    return <Spinner size={10} />
  }

  const themeOptions = [
    { value: 'light', icon: SunIcon, label: 'Toggle light mode' },
    { value: 'dark', icon: MoonIcon, label: 'Toggle dark mode' },
    { value: 'system', icon: SettingsIcon, label: 'Toggle theme system' },
  ]

  return (
    <section className='w-full flex flex-col p-10 gap-10'>
      <article className='flex flex-col gap-5'>
        <Heading>Sign Out App</Heading>
        <SignOutButton>
          <Button className='w-auto'>Sign Out</Button>
        </SignOutButton>
      </article>
      <article className='flex flex-col gap-5'>
        <Heading>Mode Themes</Heading>
        <ToggleGroup type='single' className='gap-5 shadow-xs' onValueChange={handleChangeTheme} defaultValue={theme}>
          {themeOptions.map(({ value, icon: Icon, label }) => (
            <ToggleGroupItem
              key={value}
              value={value}
              aria-label={label}
              className='group bg-primary'
              disabled={theme === value}
            >
              <Icon className='text-primary-foreground h-6 w-6 transition-all group-data-[state=on]:text-primary-foreground' />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </article>
    </section>
  )
}
