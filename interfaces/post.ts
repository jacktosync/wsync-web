import type Author from './author'

type PostType = {
  slug: string
  title: string
  excerpt: string
  tags: string[]
  coverImage: string
  date: string
  author: Author
  ogImage: string
  content: string
}

export default PostType