import { config } from '../config/env.js'
import request from './request.js'

export const getCategories = async ({ site }) => {
  if (site) {
    const url = `${config.api.base}/${site}/categories`
    try {
      const req = await request({ site, url })
      return req.categories
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getCategoryBySlug = async ({ site, slug }) => {
  if (site && slug) {
    const url = `${config.api.base}/${site}/categories/slug:${slug}`
    const req = await request({ site, url })
    return req
  } else {
    throw new Error('Require site id or site url and slug category')
  }
}
