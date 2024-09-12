import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../heading'
//meta
const meta = {
  title: 'Heading',
  render: (args) => <Heading {...args}>{args.children}</Heading>,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'Heading',
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary'],
    },
    size: {
      options: ['default', 'lg', 'md', 'xs'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

// sizes
export const SizeDefault: Story = {
  args: {
    size: 'default',
  },
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
  },
}
export const SizeMedium: Story = {
  args: {
    size: 'md',
  },
}
export const SizeTiny: Story = {
  args: {
    size: 'xs',
  },
}
