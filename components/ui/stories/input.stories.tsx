import { Meta, StoryObj } from '@storybook/react'
import { Input } from '../input'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'
//meta
const meta = {
  title: 'Input',
  render: (args) => <Input placeholder='Enter...' hasSeparator={false} {...args} />,
  tags: ['autodocs'],
  args: {
    variant: 'default',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Icon: Story = {
  args: {
    variant: 'default',
    hasSeparator: false,
    icon: <ClockOutlineIcon />,
  },
}

export const Separator: Story = {
  args: {
    variant: 'default',
    hasSeparator: true,
    icon: <ClockOutlineIcon />,
  },
}
