export type Tag = {
  ID: number
  name: string
  slug: string
  description: string
  post_count: number
  feed_url: string
  meta: TagMeta
}

export type TagMeta = {
  links: TagMetaLink
}


export type TagMetaLink = {
  self: string
  help: string
  site: string
}
