import { Meta, StoryObj } from '@storybook/react'
import { Progress } from '../progress'

//meta
const meta = {
  title: 'Progress',
  render: (args) => <Progress value={50} {...args} />,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    direction: 'row',
  },
}
export const RowReverse: Story = {
  args: {
    direction: 'row-reverse',
  },
}
