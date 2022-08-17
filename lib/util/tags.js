import { config } from '../config/env.js'
import request from './request.js'

export const getTags = async ({ site }) => {
  if (site) {
    const url = `${config.api.base}/${site}/tags`
    try {
      const req = await request({ site, url })
      return req.tags
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getTagBySlug = async ({ site, slug }) => {
  if (site && slug) {
    const url = `${config.api.base}/${site}/tags/slug:${slug}`
    const req = await request({ site, url })
    return req
  } else {
    throw new Error('Require site id or site url and slug tag')
  }
}
