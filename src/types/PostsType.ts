import { UserType } from './UserType'

export type PostType = {
  html_url: string
  id: number
  number: number
  title: string
  user: UserType
  body: string
  comments: number
  created_at: string
}
