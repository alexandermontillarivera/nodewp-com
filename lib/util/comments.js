import { config } from '../config/env.js'
import request from './request.js'

export const getComments = async ({ site }) => {
  if (site) {
    const url = `${config.api.base}/${site}/comments`
    try {
      const req = await request({ site, url })
      return req.comments
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getCommentById = async ({ site, id }) => {
  if (site && id) {
    const url = `${config.api.base}/${site}/comments/${id}`
    try {
      const req = await request({ site, url })
      return req
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url or id comment')
  }
}

export const getCommentByIdPost = async ({ site, id }) => {
  if (site && id) {
    const url = `${config.api.base}/${site}/posts/${id}/replies`
    try {
      const req = await request({ site, url })
      return req.comments
    } catch (error) {
      return error
    }
  } else {
    throw new Error('Require site id or site url or id post comment')
  }
}
