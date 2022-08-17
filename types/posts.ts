import type { Tag } from './tags.js'

export type Post = {
  ID: number
  site_ID: number
  author: PostAuthor
  date: string
  modified: string
  title: string
  URL: string
  short_URL: string
  content: string
  excerpt: string
  slug: string
  guid: string
  status: string
  sticky: boolean
  password: string
  type: string
  discussion: PostDiscussion
  likes_enabled: boolean
  sharing_enabled: boolean
  like_count: number
  i_like: boolean
  is_reblogged: boolean
  is_following: boolean
  global_ID: string
  featured_image: string
  post_thumbnail: PostThumbnail
  format: string
  geo: boolean
  menu_order: number
  page_template: string
  publicize_URLs: Array<string>
  attachments: object
  attachment_count: number
  metadata: Array<PostMetadata>
  capabilities: PostCapabilities
  other_URLs: object
  tag: Array<Tag>
}

export type PostDiscussion = {
  comment_open: boolean
  comment_status: string
  pings_open: boolean
  ping_status: string
  comment_count: number
}

export type PostThumbnail = {
  ID: number,
  URL: string,
  guid: string,
  mime_type: string,
  width: number,
  height: number
}


export type PostAuthor = {
  ID: number
  login: string
  email: string
  name: string
  first_name: string
  last_name: string
  nice_name: string
  URL: string
  avatar_URL: string
  profile_URL: string
  site_ID: number
  ip_address: boolean
}

export type PostMetadata = {
  id: string
  key: string
  value: string
}

export type PostCapabilities = {
  publish_post: boolean
  delete_post: boolean
  edit_post: boolean
}
