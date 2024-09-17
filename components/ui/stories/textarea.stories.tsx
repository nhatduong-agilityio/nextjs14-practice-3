import { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../textarea'

//meta
const meta = {
  title: 'Textarea',
  render: (args) => <Textarea {...args} />,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter here',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    placeholder: 'Enter here',
  },
}
