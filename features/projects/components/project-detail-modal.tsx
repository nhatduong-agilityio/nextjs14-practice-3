'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// Components
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { MoreIcon } from '@/icons/more-icon'
import { CheckIcon } from '@/icons/check-icon'

// Hocs
import { withMoreMenu } from '@/hocs/with-more-menu'

// Hooks
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

interface ProjectDetailModalProps {
  children: React.ReactNode
}

const MoreMenu = withMoreMenu(MoreIcon)

export const ProjectDetailModal = ({ children }: ProjectDetailModalProps) => {
  const wrapper = useRef(null)
  const router = useRouter()

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

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  useOnClickOutside(wrapper, onDismiss)

  return (
    <Dialog defaultOpen>
      <DialogContent ref={wrapper} className='p-0 gap-0 bg-card-secondary'>
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
