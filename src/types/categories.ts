export interface Category {
  ID: number
  name: string
  slug: string
  description: string
  post_count: number
  feed_url: string
  parent: number
  meta: CategoryMeta
}

export interface CategoryMeta {
  links: CategoryMetaLink
}

export interface CategoryMetaLink {
  self: string
  help: string
  site: string
}

export default Category
