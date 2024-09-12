import { Meta, StoryObj } from '@storybook/react'
import { Label } from '../label'
//meta
const meta = {
  title: 'Label',
  render: (args) => <Label {...args}>{args.children}</Label>,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'label',
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'field'],
    },
    size: {
      options: ['default', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>

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
export const Field: Story = {
  args: {
    variant: 'field',
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
