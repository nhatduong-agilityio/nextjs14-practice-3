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
