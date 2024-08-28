export type User = {
  id: string
  userName: string
  avatar: string
}

export type TeamDetail = {
  id: string
  name: string
  logo: string
  users: User[]
}

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
  attachment: Attachment[]
  taskList: Task[]
  description: string
  createdDate: string
  dueDate: string
  comments: Comment[]
}