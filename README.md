# Nodewp.com

Query in an easy way the public API of wordpress.com, with a set of functions that bring all the data with 1 or 2 parameters 📞

## Instalation 📦

Installation in your project 📁

```
npm install nodewp.com
```

## Usage 🎯

Import the module with an alias or a specific function from the library 📦

### NodeJs and express framework example 📦

```javascript
import express from 'express'

// esmodules
import wp from 'nodewp.com'

// commonjs
const wp = require('nodewp.com').default

const app = express()

const api = wp('Your id site or domain site')

app.get('/', async (req, res) => {
    const data = await api.getPosts()
    try{
        res.json({
            data: data.results,
            found: data.found
        })
    } catch (error) {
        res.send('error request')
        console.error(error)
    }
})

app.listen(3000, () => {
    console.log('[APP]: the app listening in http://localhost:3000')
})
```

### Navigator example 🔎

```javascript
import wp from 'nodewp.com'

const api = wp('Your id site or domain site')

const render = async () => {
    const app = document.getElementById('app')
    const { results } = await api.getPosts()
    results.map(({title, post_thumbnail}) => {
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

## Changes of version 1.0.3 💱

Changed all development to typescript ✅

**Compatible with both commonjs and esmodules** ✅

**Added the query options in methods of the module** ✅

Added a new website information search method ✅

Added a new website information search method ✅

Added a new method for searches and also in the method options, making it easier to create searches from api ✅

**The response of the object in the methods that return arrays was changed, which will always be { results: Array, found: Number, status: Number} ✅**

**Changed the object response in methods that return a single object, which will always be { data: Object, status: Number } ✅**

The imports of the types are in the global object of the module ✅

## Methods 🧩

**All the execution of the methods will be available when firing the main function of the module.**

```javascript
// commonjs
const main = require('nodewp.com').default

// esmodules
import main from 'nodewp.com'

const api = main('Your site url or id')

const getData = async () => {
    const { data } = await api.getSiteInfo()
    return data
}
```

- **getPosts**: Returns an array of posts. Requiere ({ site: 'Your id site or domain site' })
- **getPostById**: Returns an object from a specific publication. Requiere ({ site: 'Your id site or domain site', id: 'ID post' })
- **getPostBySlug**: Returns an object from a specific publication. Requiere ({ site: 'Your id site or domain site', slug: 'Slug post' })
- **getPostsByCategories**: Returns array of posts from a certain category. Requiere ({ site: 'Your id site or domain site', category: 'The category' }) and that the post only has one category
- **getCategories**: Returns an array of all site categories. Requiere ({ site: 'Your id site or domain site' })
- **getCategoryBySlug**: Returns an object from a specific category. Requiere ({ site: 'Your id site or domain site', slug: 'Slug category})
- **getComments**: Returns an array of all comments on the site. Requiere ({ site: 'Your id site or domain site' })
- **getCommentByIdPost**: Returns an array of comments from a specific post. Requiere ({ site: 'Your id site or domain site', id: 'ID post' })
- **getCommentById**: Returns a specific comment object searched for by id. Requiere ({ site: 'Your id site or domain site', id: 'ID comment' })
- **getTags**: Return an array of tags from your site. Requiere ({ site: 'Your id site or domain site' })
- **getTagBySlug**: Returns an object from a specific tag. Requiere ({ site: 'Your id site or domain site', slug: 'Slug tag' })
- **\[NEW\] getPostBySearch:** Returns an array of posts by search terms in string. Requiere ({ site: 'Your id site or domain site', search: 'string terms' })
- **\[NEW\] getSiteInfo:** Returns object from data of the wordpress site. Requiere ({ site: 'Your id site or domain site' })

## Properties and TypeScript 🆎

**Even if you have no idea about TypeScript, see the links to see what you can access if you use JavaScript after using one of the methods**

1.  [Types of the posts](https://github.com/alexandermontillarivera/nodewp.com/blob/master/types/posts.ts)
2.  [Types of the comments](https://github.com/alexandermontillarivera/nodewp.com/blob/master/types/comments.ts)
3.  [Types of the categories](https://github.com/alexandermontillarivera/nodewp.com/blob/master/types/categories.ts)
4.  [Types of the tags](https://github.com/alexandermontillarivera/nodewp.com/blob/master/types/tags.ts)
5.  [\[NEW\] Types of the site](https://github.com/alexandermontillarivera/nodewp.com/blob/master/types/site.ts)

### NodeJs, TypeScript and express framework example 📦

```typescript
import express, { Request, Response, Application } from 'express'
import type { Post } from 'nodewp.com'
import wp from 'nodewp.com'

const app: Application = express()

const api = wp('Your site id or url')

app.get('/', async (_req: Request, res: Response) => {
    const data: Array<Post> = await api.getPosts({site: 'Your id site or domain site'})
    try{
        res.json(data.results)
    } catch (error) {
        res.send('error request')
        console.error(error)
    }
})

app.listen(3000, () => {
    console.log('[APP]: the app listening in http://localhost:3000')
})
```

### Navigator example (use [vite](https://vitejs.dev/) as recommendation) 🔎

```typescript
import wp from 'nodewp.com'
import type { Post } from 'nodewp.com'

const render = async () => {
    const app = document.querySelector<HTMLDivElement>('#app')
    const data: Array<Post> = await wp.getPosts({site: 'Your id site or domain site'})
    data.results.map(({title, post_thumbnail}) => {
        app!.innerHTML += `
            <h2>${title}</h2>
            <img src='${post_thumbnail.URL}' />
        `
    })
}

document.addEventListener('DOMContentLoaded', () => {
  render()
})
```

## More information to work with the wordpress.com API 🕶

- [REST API Resources | Developer Resources (wordpress.com)](https://developer.wordpress.com/docs/api/)
- Insert url in your navigator changing what goes between the {} for the url or id of your site: **https://public-api.wordpress.com/rest/v1.1/sites/{your site id or url}/help**
