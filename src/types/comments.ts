import type { PostAuthor } from './posts.js'

export interface Comment {
  ID: number
  post: CommentPost
  author: PostAuthor
  date: string
  URL: string
  short_URL: string
  content: string
  raw_content: string
  status: string
  parent: string
  type: string
  like_count: number
  i_like: boolean
  meta: CommentMeta
  can_moderate: boolean
  i_replied: boolean
}

export interface CommentPost {
  ID: number
  title: string
  type: string
  link: string
}

export interface CommentMeta {
  links: CommentMetaLink
}

export interface CommentMetaLink {
  self: string
  help: string
  site: string
  post: string
  replies: string
  likes: string
}

export default Comment
