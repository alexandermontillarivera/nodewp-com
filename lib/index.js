import { getPostById, getPostBySlug, getPosts, getPostsByCategories } from './util/posts.js'
import { getCategories, getCategoryBySlug } from './util/categories.js'
import { getCommentById, getCommentByIdPost, getComments } from './util/comments.js'
import { getTagBySlug, getTags} from './util/tags.js'

const lib = {
  getPostById,
  getPostBySlug,
  getPosts,
  getPostsByCategories,
  getCategories,
  getCategoryBySlug,
  getCommentById,
  getCommentByIdPost,
  getComments,
  getTagBySlug,
  getTags
}

export default lib
