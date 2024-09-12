import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../toggle'
import { SettingsIcon } from '@/icons/settings-icon'

const meta = {
  title: 'Toggle',
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
  component: (args) => (
    <>
      <Toggle {...args}>
        <SettingsIcon />
      </Toggle>
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

//sizes
export const SizeDefault: Story = {
  args: { variant: 'default', size: 'default' },
}

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
export const ToggleWithText = (args: Story) => (
  <Toggle aria-label='Toggle setting' {...args}>
    <SettingsIcon className='mr-2 h-4 w-4' />
    Setting
  </Toggle>
)

export default meta
