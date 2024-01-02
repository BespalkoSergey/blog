import type { BlogType } from './models'

export const addZeros = (n: number): string => `00${n}`.slice(-2)

export const getDate = (b: BlogType): string => {
  const date = new Date(b.updated_at)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear().toString().slice(-2)
  return `${addZeros(day)}.${addZeros(month)}.${year}`
}

export const calculateReadingTime = (b: BlogType, averageReadingSpeed = 200, wordsPerPage = 300): number => {
  const words = b.content_html.split(/\s+/).length
  const minutesToRead = words / wordsPerPage / (averageReadingSpeed / 60)
  return Math.ceil(minutesToRead)
}

