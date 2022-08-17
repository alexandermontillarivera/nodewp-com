import { config } from '../config/env.js'
import request from './request.js'

export const getPosts = async ({ site }) => {
  if (site) {
    const url = `${config.api.base}/${site}/posts`
    try {
      const req = await request({ site, url })
      const data = req.posts
      await data.map(i => {
        i.category = Object.values(i.categories)
        i.tag = Object.values(i.tags)
      })
      return data
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getPostById = async ({ site, id }) => {
  if (site && id) {
    const url = `${config.api.base}/${site}/posts/${parseInt(id)}`
    const req = await request({ site, url, id })
    req.category = Object.values(req.categories)
    req.tag = Object.values(req.tags)
    return req
  } else {
    throw new Error('Require site id or site url and id post')
  }
}

export const getPostBySlug = async ({ site, slug }) => {
  if (site && slug) {
    const url = `${config.api.base}/${site}/posts/slug:${toString(slug)}`
    const req = await request({ site, url })
    req.category = Object.values(req.categories)
    req.tag = Object.values(req.tags)
    return req
  } else {
    throw new Error('Require site id or site url and slug post')
  }
}

export const getPostsByCategories = async ({ site, category }) => {
  if (site && category) {
    const url = `${config.api.base}/${site}/posts`
    try {
      const req = await request({ site, url })
      const data = req.posts
      await data.map(i => { 
        i.category = Object.values(i.categories)
        i.tag = Object.values(i.tags)
      })
      const filter = await data.filter((i) => {
        return i.category.map((i) => i.name) == category /* eslint-disable-line */
      })
      return filter
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url and category posts')
  }
}
