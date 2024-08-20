import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    title: 'Button Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Button Secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    title: 'Button Outline',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Button Destructive',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    title: 'Button Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    title: 'Button Link',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Button Small',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    title: 'Button Icon',
  },
}
