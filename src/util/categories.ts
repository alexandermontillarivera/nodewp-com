import { config } from '../config/'
import request from './request'
import type { Category, Options, OptionsOne, ResultOnly, Results, ResultsError, ResultOnlyError } from '../types'

export const getCategories = async (options: { site: string | number }, query: Options | null = null): Promise< Results<Category> | ResultsError> => {
  if (options.site) {
    let url: string
    query === null
      ? url = `${String(config.api.base)}/${String(options.site)}/categories`
      : url = `${String(config.api.base)}/${String(options.site)}/categories?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { found: number, categories: Category[] }, status: number } = await request({ site: options.site, url })
      return {
        results: req.data.categories,
        found: req.data.found,
        status: req.status
      }
    } catch (error: any) {
      return {
        status: error,
        found: null,
        results: null
      }
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getCategoryBySlug = async (options: { site: string | number, slug: string }, query: OptionsOne | null = null): Promise<ResultOnly<Category> | ResultOnlyError> => {
  if (options.site && options.slug) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/categories/slug:${String(options.slug)}`
      : url = `${config.api.base}/${String(options.site)}/categories/slug:${String(options.slug)}&${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { status: number, data: Category } = await request({ site: options.site, url })
      return {
        status: req.status,
        data: req.data
      }
    } catch (error: any) {
      return {
        status: error,
        data: null
      }
    }
  } else {
    throw new Error('Require site id or site url and slug category')
  }
}

module.exports = {
  getCategories,
  getCategoryBySlug
}
