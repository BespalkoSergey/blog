export type BlogType = {
  id: number
  title: string
  img_url: string
  description: string
  category_keywords: string[]
  content_html: string
  created_at: string
  updated_at: string
}

export type RowType = {
  id: number
  title: string
  img_url: string
  description: string
  category_keywords: string
  content_html: string
  created_at: string
  updated_at: string
}

export type PageType<Data> = {
  data: Data[]
  start: number
  end: number
  size: number
  total: number
  currentPage: number
  lastPage: number
  url: UrlType
}

export type UrlType = {
  current: string
  next: string
  prev: string
}
