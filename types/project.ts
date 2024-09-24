import { User } from './user'

export type Attachment = {
  id: string
  fileName: string
  fileType: string
  fileSize: number
  uploadDate: string
  url: string
}

export type Task = {
  id: string
  title: string
  status: 'In Progress' | 'Pending' | 'Completed'
  assigned: User[]
  dueDate: string
}

export type Comment = {
  id: string
  owner: User
  content: string
  createdDate: string
}

export type ProjectDetail = {
  id: string
  name: string
  owner: User
  team: string
  assigned: User[]
  columnId: string
  index: number
  attachment: Attachment[]
  taskList: Task[]
  description: string
  createdDate: string
  dueDate: string
  comments: Comment[]
  status?: 'Completed'
}

export type ProjectColumn = {
  id: string
  title: string
  index: number
  projectIds: string[]
}

export type ProjectFilter = 'arrange' | 'filter' | 'sort'
