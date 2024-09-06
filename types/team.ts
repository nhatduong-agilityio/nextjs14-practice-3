import { User } from './user'

export type TeamDetail = {
  id: string
  name: string
  logo: string
  users: User[]
}
