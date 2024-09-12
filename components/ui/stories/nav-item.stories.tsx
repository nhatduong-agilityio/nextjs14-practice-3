import { Meta, StoryObj } from '@storybook/react'
import { NavItem } from '../nav-item'
import { DashboardIcon } from '@/icons/dashboard-icon'
import { Badge } from '../badge'
import { Sheet } from '../sheet'
//meta
const meta = {
  title: 'NavItem',
  render: (args) => (
    <Sheet>
      <NavItem {...args} />
    </Sheet>
  ),
  args: {
    label: 'Nav item',
    url: '/',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavItem>

export default meta

type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    isActive: true,
  },
}
export const SubItem: Story = {
  args: {
    isSubItem: true,
    hasSubItem: true,
  },
}
export const Icon: Story = {
  args: {
    icon: <DashboardIcon />,
  },
}

export const SuffixContent: Story = {
  args: {
    suffixContent: <Badge variant='destructive'>Suffix Content</Badge>,
  },
}
