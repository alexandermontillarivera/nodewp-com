export interface Tag {
  ID: number
  name: string
  slug: string
  description: string
  post_count: number
  feed_url: string
  meta: TagMeta
}

export interface TagMeta {
  links: TagMetaLink
}

export interface TagMetaLink {
  self: string
  help: string
  site: string
}

export default Tag
