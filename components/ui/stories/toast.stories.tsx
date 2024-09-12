import { Meta, StoryObj } from '@storybook/react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '../button'

type ToastProps = {
  title?: string
  description?: string
  variant?: 'destructive' | 'default' | 'active'
}
const ToastDemo = ({ description, title, variant = 'default' }: ToastProps) => {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title,
          description,
          variant,
        })
      }}
    >
      Toast
    </Button>
  )
}

const meta = {
  title: 'Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'active'],
    },
  },
  parameters: {},
} satisfies Meta<typeof ToastDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Toast: Story = {
  args: {
    title: 'Shadcn-ui',
    description: 'like shadcn-ui',
  },
}
export const Destructive: Story = {
  args: {
    title: 'Shadcn-ui',
    description: 'not like shadcn-ui',
    variant: 'destructive',
  },
}

export const Active: Story = {
  args: {
    title: 'Shadcn-ui',
    description: 'not like shadcn-ui',
    variant: 'active',
  },
}

export const NotDescription: Story = {
  args: {
    title: 'Shadcn-ui',
  },
}

export const NotTitle: Story = {
  args: {
    description: 'like shadcn-ui',
  },
}
