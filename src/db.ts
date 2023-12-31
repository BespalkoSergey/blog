import type { BlogType } from './models'

export const getBlogs = async () => {
  const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=30')
  const json = await response.json()
  const blogs = json['blogs'] as BlogType[]
  return blogs
}
