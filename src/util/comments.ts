import { config } from '../config'
import request from './request'
import type { Comment, OptionsComment, OptionsOne, ResultOnly, ResultOnlyError, Results, ResultsError } from '../types'

export const getComments = async (options: { site: string | number }, query: OptionsComment | null = null): Promise<Results<Comment> | ResultsError> => {
  if (options.site) {
    let url: string
    query === null
      ? url = `${String(config.api.base)}/${String(options.site)}/comments`
      : url = `${String(config.api.base)}/${String(options.site)}/comments?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { comments: Comment[], found: number }, status: number } = await request({ site: options.site, url })
      return {
        found: req.data.found,
        results: req.data.comments,
        status: req.status
      }
    } catch (error: any) {
      return {
        found: null,
        results: null,
        status: error
      }
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getCommentById = async (options: { site: string | number, id: number }, query: OptionsOne | null = null): Promise<ResultOnly<Comment> | ResultOnlyError> => {
  if (options.site && options.id) {
    let url: string
    query === null
      ? url = `${String(config.api.base)}/${String(options.site)}/comments/${String(options.id)}`
      : url = `${String(config.api.base)}/${String(options.site)}/comments/${String(options.id)}?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: Comment, status: number } = await request({ site: options.site, url })
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
    throw new Error('Require site id or site url or id comment')
  }
}

export const getCommentByIdPost = async (options: { site: string | number, id: number }, query: OptionsComment | null = null): Promise<Results<Comment> | ResultsError> => {
  if (options.site && options.id) {
    let url: string
    query === null
      ? url = `${String(config.api.base)}/${String(options.site)}/posts/${String(options.id)}/replies`
      : url = `${String(config.api.base)}/${String(options.site)}/posts/${String(options.id)}/replies?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { comments: Comment[], found: number }, status: number } = await request({ site: options.site, url })
      return {
        results: req.data.comments,
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
    throw new Error('Require site id or site url or id post comment')
  }
}
