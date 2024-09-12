import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'
import { Separator } from '../separator'
//meta
const meta = {
  title: 'Separator',
  render: (args) => <Separator className='w-[200px] h-1' {...args} />,
  tags: ['autodocs'],
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'dashed'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
  },
}
export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
}
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-[200px] w-1',
  },
}
