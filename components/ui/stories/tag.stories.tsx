import { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../tag'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'

//meta
const meta = {
  title: 'Tag',
  render: (args) => <Tag {...args}>{args.children}</Tag>,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'tag',
  },
  argTypes: {
    variant: {
      options: ['default', 'warning', 'label', 'destructive'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
  },
}
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}
export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}
export const Label: Story = {
  args: {
    variant: 'label',
  },
}
export const Icon: Story = {
  args: {
    icon: <ClockOutlineIcon />,
  },
}
