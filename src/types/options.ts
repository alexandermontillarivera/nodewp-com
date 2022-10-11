export interface Options {
  meta?: string
  fields?: string
  number?: number
  offset?: number
  page?: number
  order?: 'ASC' | 'DESC'
  order_by?: 'date' | 'modified' | 'title'
  context?: string
  http_envelope?: boolean
  pretty?: boolean
  search?: string
  callback?: string
}

export interface OptionsOne {
  http_envelope?: boolean
  pretty?: boolean
  meta?: string
  fields?: string
  callback?: string
  context?: string
}

export interface OptionsPost extends Options {
  author?: number
  exclude?: number[] | number
  modified_after?: Date
  modified_before?: Date
  after?: Date
  before?: Date
  parent_id?: number
  meta_key?: string
  meta_value?: string
  exclude_tree?: number
  page_handle?: string
  tag?: string
}

export interface OptionsComment extends Options {
  after?: Date
  before?: Date
  hierarchical?: boolean
  type?: 'comment' | 'trackback' | 'pingback' | 'pings'
}

export default Options
