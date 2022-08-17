import type { Category } from './types/categories.js'
import type { Comment } from './types/comments.js'
import type {Post} from './types/posts.js'
import type { Tag } from './types/tags.js'
  export function getPosts (parameters: {site: string}): Array<Post>
  export function getPostById (parameters: {site: string, id: number}): Post
  export function getPostBySlug (parameters: {site: string, slug: string}): Post
  export function getPostsByCategories (parameters: {site: string, category: string}): Array<Post>
  export function getCategories (parameters: {site: string}): Array<Category>
  export function getCategoryBySlug (parameters: {site: string, slug: string}): Category
  export function getCommentByIdPost (parameters: {site: string, id: number}): Comment
  export function getComments (parameters: {site: string}): Array<Comment>
  export function getTagBySlug (parameters: {site: string, slug: string}): Tag
  export function getTags (parameters: {site: string, slug: string}): Array<Tag>