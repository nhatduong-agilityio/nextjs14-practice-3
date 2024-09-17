'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'

// Components
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { MoreIcon } from '@/icons/more-icon'
import { CheckIcon } from '@/icons/check-icon'

// Hocs
import { withMoreMenu } from '@/hocs/with-more-menu'

// Constants
import { ROUTES } from '@/constants/routes'

interface ProjectDetailModalProps {
  projectId: string
  children: React.ReactNode
}

const MoreMenu = withMoreMenu(MoreIcon)

export const ProjectDetailModal = ({ projectId, children }: ProjectDetailModalProps) => {
  const wrapper = useRef(null)
  const router = useRouter()

  const listProjectActions = [
    {
      name: 'Go To Page Detail',
      action: () => window.open(`${ROUTES.PROJECTS}/${projectId}`, '_blank'),
    },
    {
      name: 'Delete Project',
      action: () => null,
      isDisable: true,
    },
    {
      name: 'Edit Project',
      action: () => null,
      isDisable: true,
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

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && onDismiss()}>
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
