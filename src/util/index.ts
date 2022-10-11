import { getCategories, getCategoryBySlug } from './categories'
import { getCommentById, getCommentByIdPost, getComments } from './comments'
import { getPostById, getPostBySlug, getPosts, getPostsByCategories, getPostsBySearch } from './posts'
import { getTagBySlug, getTags } from './tags'
import type { Category, Comment, Post, OptionsPost, Options, OptionsComment, OptionsOne, Tag, Site, Results, ResultsError, ResultOnly, ResultOnlyError } from '../types'
import getSiteInfo from './site'

const main = (site: string | number): {
  getCategories: (query: Options | null) => Promise<Results<Category> | ResultsError>
  getCategoryBySlug: (slug: string, query: OptionsOne | null) => Promise< ResultOnly<Category> | ResultOnlyError>
  getCommentById: (id: number, query: OptionsOne | null) => Promise<ResultOnly<Comment> | ResultOnlyError>
  getCommentByIdPost: (id: number, query: OptionsComment | null) => Promise<Results<Comment> | ResultsError>
  getComments: (query: OptionsComment | null) => Promise<Results<Comment> | ResultsError>
  getPostById: (id: number, query: OptionsOne | null) => Promise<ResultOnly<Post> | ResultOnlyError>
  getPostBySlug: (slug: string, query: OptionsOne | null) => Promise<ResultOnly<Post> | ResultOnlyError>
  getPosts: (query: OptionsPost | null) => Promise<Results<Post> | ResultsError>
  getPostsByCategories: (search: string, query: OptionsPost | null) => Promise<Results<Post> | ResultsError>
  getPostsBySearch: (search: string, query: OptionsPost | null) => Promise<Results<Post> | ResultsError>
  getTagBySlug: (slug: string, query: OptionsOne | null) => Promise<ResultOnly<Tag> | ResultOnlyError>
  getTags: (query: Options | null) => Promise<Results<Tag> | ResultsError>
  getSiteInfo: (query: OptionsOne | null) => Promise<ResultOnly<Site> | ResultOnlyError>
} => {
  if (!site) {
    throw new Error('Require site id or domain app, example: hello.wordpress.com')
  } else {
    return {
      getCategories: async (query: Options | null = null): Promise<Results<Category> | ResultsError> => {
        return await getCategories({ site }, query)
      },
      getCategoryBySlug: async (slug: string, query: OptionsOne | null = null) => {
        return await getCategoryBySlug({ site, slug }, query)
      },
      getCommentById: async (id: number, query: OptionsOne | null = null) => {
        return await getCommentById({ site, id }, query)
      },
      getCommentByIdPost: async (id: number, query: OptionsComment | null = null) => {
        return await getCommentByIdPost({ site, id }, query)
      },
      getComments: async (query: OptionsComment | null = null) => {
        return await getComments({ site }, query)
      },
      getPostById: async (id: number, query: OptionsOne | null = null) => {
        return await getPostById({ site, id }, query)
      },
      getPostBySlug: async (slug: string, query: OptionsOne | null = null) => {
        return await getPostBySlug({ site, slug }, query)
      },
      getPosts: async (query: OptionsPost | null = null) => {
        return await getPosts({ site }, query)
      },
      getPostsByCategories: async (category: string, query: OptionsPost | null = null) => {
        return await getPostsByCategories({ site, category }, query)
      },
      getPostsBySearch: async (search: string, query: OptionsPost | null = null) => {
        return await getPostsBySearch({ site, search }, query)
      },
      getTagBySlug: async (slug: string, query: OptionsOne | null = null) => {
        return await getTagBySlug({ site, slug }, query)
      },
      getTags: async (query: Options | null = null) => {
        return await getTags({ site }, query)
      },
      getSiteInfo: async (query: OptionsOne | null = null) => {
        return await getSiteInfo({ site }, query)
      }
    }
  }
}

export default main
module.exports = main
