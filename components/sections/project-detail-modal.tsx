'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Text } from '../ui/text'
import { Badge } from '../ui/badge'
import { withMoreMenu } from '../hocs/withMoreMenu'
import { MoreIcon } from '@/icons/more-icon'
import { CheckIcon } from '@/icons/check-icon'
import { Heading } from '../ui/heading'

interface ProjectDetailModalProps {
  children: React.ReactNode
}

const MoreMenu = withMoreMenu(MoreIcon)

const ProjectDetailModal = ({ children }: ProjectDetailModalProps) => {
  const listProjectActions = [
    {
      name: 'Show Detail',
      action: () => null,
    },
    {
      name: 'Delete Project',
      action: () => null,
    },
    {
      name: 'Edit Project',
      action: () => null,
    },
  ]

  return (
    <Dialog open={true}>
      <DialogContent className='p-0 gap-0 bg-card-secondary'>
        <DialogHeader className='flex flex-row px-5 pt-4 pb-[15px] space-y-0 items-center justify-between pr-[68px] border-b border-separator'>
          <Badge variant='outline' className='text-label-secondary h-8 rounded-[8px] font-poppins'>
            <CheckIcon width={20} height={20} className='mr-2' /> Mark Complete
          </Badge>
          <MoreMenu title='Project Actions' menuOptions={listProjectActions} />
        </DialogHeader>
        <DialogTitle className='hidden'>Project Detail Modal</DialogTitle>
        <DialogDescription className='hidden'>Project Detail Modal Description</DialogDescription>
        <div className='flex flex-col max-h-[92dvh] overflow-y-scroll'>{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetailModal
