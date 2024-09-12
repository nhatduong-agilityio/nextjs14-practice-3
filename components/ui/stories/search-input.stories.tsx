import { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../search-input'

//meta
const meta = {
  title: 'SearchInput',
  render: (args) => <SearchInput {...args} />,
  args: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
