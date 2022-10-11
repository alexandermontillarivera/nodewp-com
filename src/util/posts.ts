import { config } from '../config'
import request from './request'
import type { PostMaster, Post } from '../types/posts'
import type { OptionsPost, OptionsOne, ResultOnly, ResultOnlyError, Results, ResultsError } from '../types'

export const getPosts = async (options: { site: string | number }, query: OptionsPost | null = null): Promise<Results<Post> | ResultsError> => {
  if (options.site) {
    let url: string = ''
    query === null
      ? url = `${String(config.api.base)}/${String(options.site)}/posts`
      : url = `${String(config.api.base)}/${String(options.site)}/posts?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { found: number, posts: PostMaster[] }, status: number } = await request({ site: options.site, url })
      const data = req.data.posts
      await data.map((i: PostMaster) => {
        const set = () => {
          i.category = Object.values(i.categories)
          i.tag = Object.values(i.tags)
        }
        return set()
      })
      return {
        results: data,
        found: req.data.found,
        status: req.status
      }
    } catch (error: any) {
      throw new Error(error)
    }
  } else {
    throw new Error('Require site id or site url')
  }
}

export const getPostById = async (options: { site: string | number, id: number }, query: OptionsOne | null = null): Promise<ResultOnly<Post> | ResultOnlyError > => {
  if (options.site && options.id) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/posts/${String(options.id)}`
      : url = `${config.api.base}/${String(options.site)}/posts/${String(options.id)}?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: PostMaster, status: number } = await request({ site: options.site, url })
      req.data.category = Object.values(req.data.categories)
      req.data.tag = Object.values(req.data.tags)
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
    throw new Error('Require site id or site url and id post')
  }
}

export const getPostBySlug = async (options: { site: string | number, slug: string }, query: OptionsOne | null = null): Promise<ResultOnly<Post> | ResultOnlyError> => {
  if (options.site && options.slug) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/posts/slug:${String(options.slug)}`
      : url = `${config.api.base}/${String(options.site)}/posts/slug:${String(options.slug)}?${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: PostMaster, status: number } = await request({ site: options.site, url })
      req.data.category = Object.values(req.data.categories)
      req.data.tag = Object.values(req.data.tags)
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
    throw new Error('Require site id or site url and slug post')
  }
}

export const getPostsByCategories = async (options: { site: string | number, category: string }, query: OptionsPost | null = null): Promise<Results<Post> | ResultsError > => {
  if (options.site && options.category) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/posts?category=${options.category}`
      : url = `${config.api.base}/${String(options.site)}/posts?category=${options.category}&${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { found: number, posts: PostMaster[] }, status: number } = await request({ site: options.site, url })
      const data = req.data.posts
      await data.map((i: PostMaster) => {
        const set = () => {
          i.category = Object.values(i.categories)
          i.tag = Object.values(i.tags)
        }
        return set()
      })
      return {
        results: data,
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
    throw new Error('Require site id or site url and category posts')
  }
}

export const getPostsBySearch = async (options: { site: string | number, search: string }, query: OptionsPost | null = null): Promise<Results<Post> | ResultsError> => {
  if (options.site && options.search) {
    let url: string
    query === null
      ? url = `${config.api.base}/${String(options.site)}/posts?search=${options.search}`
      : url = `${config.api.base}/${String(options.site)}/posts?search=${options.search}&${new URLSearchParams(Object(query)).toString()}`
    try {
      const req: { data: { found: number, posts: PostMaster[] }, status: number } = await request({ site: options.site, url })
      const data = req.data.posts
      await data.map((i: PostMaster) => {
        const set = () => {
          i.category = Object.values(i.categories)
          i.tag = Object.values(i.tags)
        }
        return set()
      })
      return {
        results: data,
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
    throw new Error('Require site id or site url and search terms')
  }
}
