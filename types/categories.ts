export type Category = {
  ID: number
  name: string
  slug: string
  description: string
  post_count: number
  feed_url: string
  parent: number
  meta: CategoryMeta
}

export type CategoryMeta = {
  links: CategoryMetaLink
}


export type CategoryMetaLink = {
  self: string
  help: string
  site: string
}
