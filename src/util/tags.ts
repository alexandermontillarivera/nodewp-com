import { config } from '../config'
import request from './request'
import type { Tag, Options, OptionsOne, ResultOnly, ResultOnlyError, Results, ResultsError } from '../types'
export const getTags = async (options: { site: string | number }, query: Options | null = null): Promise<Results<Tag> | ResultsError> => {
  if (options.site) {
    let url: string
    query === null
      ? url = `${config.api.base}/${options.site}/tags`
      : url = `${config.api.base}/${options.site}/tags?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { tags: Tag[], found: number }, status: number } = await request({ site: options.site, url })
      return {
        results: req.data.tags,
        found: req.data.found,
        status: req.status
      }
    } catch (error: any) {
      return {
        results: null,
        found: null,
        status: error
      }
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getTagBySlug = async (options: { site: string | number, slug: string }, query: OptionsOne | null = null): Promise<ResultOnly<Tag> | ResultOnlyError> => {
  if (options.site && options.slug) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/tags/slug:${String(options.slug)}`
      : url = `${config.api.base}/${String(options.site)}/tags/slug:${String(options.slug)}?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: Tag, status: number } = await request({ site: options.site, url })
      return {
        data: req.data,
        status: req.status
      }
    } catch (error: any) {
      return {
        data: null,
        status: error
      }
    }
  } else {
    throw new Error('Require site id or site url and slug tag')
  }
}
