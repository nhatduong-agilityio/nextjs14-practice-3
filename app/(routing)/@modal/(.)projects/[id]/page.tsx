import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const ProjectDetailModal = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>This is project detail modal: {id}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetailModal
