import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { CloseIcon } from '@/icons/close-icon'

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline', 'rounded'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg', 'text'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// variants
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button Shadcn',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Shadcn',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button Shadcn',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button Shadcn',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button Shadcn',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button Shadcn',
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    size: 'icon',
    className: 'bg-input-foreground w-12 h-12',
    children: <CloseIcon className='text-secondary' />,
  },
}

// sizes
export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'Button Shadcn',
  },
}

export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: 'icon',
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Button Shadcn',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Button Shadcn',
  },
}

export const SizeText: Story = {
  args: {
    size: 'sm',
    children: 'Button Shadcn',
  },
}
