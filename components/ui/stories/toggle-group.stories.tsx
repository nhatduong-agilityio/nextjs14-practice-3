import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../toggle'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { SettingsIcon } from '@/icons/settings-icon'

const meta = {
  title: 'ToggleGroup',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <>
      <ToggleGroup variant={args.variant} size={args.size} disabled={args.disabled} type='multiple'>
        <ToggleGroupItem value='light' aria-label='Toggle light'>
          <SunIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='dark' aria-label='Toggle dark'>
          <MoonIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='system' aria-label='Toggle system'>
          <SettingsIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof meta>

//colors
export const Default: Story = {
  args: { variant: 'default' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const ToggleGroupSingle: Story = {
  args: { variant: 'outline' },
  render: (args) => (
    <>
      <ToggleGroup variant={args.variant} size={args.size} disabled={args.disabled} type='single'>
        <ToggleGroupItem value='light' aria-label='Toggle light'>
          <SunIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='dark' aria-label='Toggle dark'>
          <MoonIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value='system' aria-label='Toggle system'>
          <SettingsIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
}

//sizes
export const SizeSmall: Story = {
  args: { variant: 'default', size: 'sm' },
}

export const SizeLarge: Story = {
  args: { variant: 'default', size: 'lg' },
}

//disabled
export const Disabled: Story = {
  args: { variant: 'default', size: 'default', disabled: true },
}

export default meta
