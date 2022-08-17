# Nodewp

Query in an easy way the public API of wordpress.com, with a set of functions that bring all the data with 1 or 2 parameters 📞

## Instalation 📦

Installation in your project 📁
```console
npm install nodewp
```

## Usage 🎯

Import the module with an alias or a specific function from the library 📦

### NodeJs and express framework example 📦

```javascript
import express from 'express'
import nodewpress from 'nodewpress'

const app = express()

app.get('/', async (req, res) => {
    const data = await nodewpress.getPosts({site: 'Your id site or domain site'})
    try{
        res.json(data)
    } catch (error) {
        res.send('error request')
        console.error(error)
    }
})

app.listen(3000, () => {
    console.log('[APP]: the app listening in http://localhost:3000')
})
```

### Navigator example  🔎

```javascript
import nodewpress from 'nodewpress'

const render = async () => {
    const app = document.getElementById('app')
    const data = await nodewpress.getPosts({site: 'Your id site or domain site'})
    data.map(({title, post_thumbnail}) => {
        app.innerHTML += `
        	<h2>${title}</h2>
        	<img src='${post_thumbnail.URL}' />
        `
    })
}

document.addEventListener('load', () => {
  render()
})

```

## Methods 🧩

- **getPosts**: Returns an array of  posts. Requiere ({ site: 'Your id site or domain site' })
- **getPostById**: Returns an object from a specific publication. Requiere ({ site: 'Your id site or domain site', id: 'ID post' })
- **getPostBySlug**:  Returns an object from a specific publication. Requiere ({ site: 'Your id site or domain site', slug: 'Slug post' })
- **getPostsByCategories**: Returns array of posts from a certain category. Requiere ({ site: 'Your id site or domain site', category: 'The category' }) and that the post only has one category
- **getCategories**: Returns an array of all site categories. Requiere ({ site: 'Your id site or domain site' })
- **getCategoryBySlug**: Returns an object from a specific category. Requiere ({ site: 'Your id site or domain site', slug: 'Slug category})
- **getComments**: Returns an array of all comments on the site. Requiere ({ site: 'Your id site or domain site' })
- **getCommentByIdPost**: Returns an array of comments from a specific post. Requiere ({ site: 'Your id site or domain site', id: 'ID post' })
- **getCommentById**: Returns a specific comment object searched for by id. Requiere ({ site: 'Your id site or domain site', id: 'ID comment' })
- **getTags**: Return an array of tags from your site. Requiere ({ site: 'Your id site or domain site' })
- **getTagBySlug**: Returns an object from a specific tag. Requiere ({ site: 'Your id site or domain site', slug: 'Slug tag'  })

## Properties and TypeScript

**Even if you have no idea about TypeScript, see the links to see what you can access if you use JavaScript after using one of the methods**

1. [Types of the posts](https://github.com/alexandermontillarivera/nodewpress/blob/master/types/posts.ts)
2. [Types of the comments](https://github.com/alexandermontillarivera/nodewpress/blob/master/types/comments.ts)
3. [Types of the categories](https://github.com/alexandermontillarivera/nodewpress/blob/master/types/categories.ts)
4. [Types of the tags](https://github.com/alexandermontillarivera/nodewpress/blob/master/types/tags.ts)


### NodeJs, TypeScript and express framework example 📦

```typescript
import express, {Request, Response, Express} from 'express'
import type { Post } from 'nodewpress/types/posts.ts' 
import nodewpress from 'nodewpress'

const app: Express = express()

app.get('/', async (_req: Request, res: Response) => {
    const data: Array<Post> = await nodewpress.getPosts({site: 'Your id site or domain site'})
    try{
        res.json(data)
    } catch (error) {
        res.send('error request')
        console.error(error)
    }
})

app.listen(3000, () => {
    console.log('[APP]: the app listening in http://localhost:3000')
})
```

### Navigator example  (use vite as recommendation) 🔎 

```typescript
import nodewpress from 'nodewpress'
import type { Post } from 'nodewpress/types/posts.ts'

const render = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')
    const data: Array<Post> = await nodewpress.getPosts({site: 'Your id site or domain site'})
    data.map(({title, post_thumbnail}) => {
        app.innerHTML += `
        	<h2>${title}</h2>
        	<img src='${post_thumbnail.URL}' />
        `
    })
}

document.addEventListener('load', () => {
  render()
})

```

## More information to work with the wordpress.com API 🕶

- [REST API Resources | Developer Resources (wordpress.com)](https://developer.wordpress.com/docs/api/)
