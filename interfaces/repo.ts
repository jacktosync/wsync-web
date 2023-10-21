import type Author from './author'

type RepoType = {
  slug: string
  title: string
  excerpt: string
  price: string
  demo: string
  tags: string[]
  date: string
  coverImage: string
  author: Author
  ogImage: string
  content: string
}

export default RepoType