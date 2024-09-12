import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../text'

//meta
const meta = {
  title: 'Text',
  render: (args) => <Text {...args}>{args.children}</Text>,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'text',
  },
  argTypes: {
    variant: {
      options: ['default', 'error', 'label', 'secondary', 'link'],
    },
    size: {
      options: ['default', 'xs', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
  },
}
export const Error: Story = {
  args: {
    variant: 'error',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
  },
}
export const Label: Story = {
  args: {
    variant: 'label',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

// size
export const SizeTiny: Story = {
  args: {
    size: 'xs',
  },
}
export const SizeMedium: Story = {
  args: {
    size: 'md',
  },
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
  },
}
