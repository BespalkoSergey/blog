import type { BlogType, RowType } from './models'
import sqlite3 from 'sqlite3'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

const db = new sqlite3.Database(resolve(__dirname, '../', 'database.db'))

export const getBlogs = async (): Promise<BlogType[]> =>
  new Promise((resolve, reject) => {
    db.all<RowType>('SELECT * FROM `blogs` ORDER BY `blogs`.`updated_at` DESC', (err, rows) => {
      if (err) {
        reject(err)
        return
      }

      const blogs = rows.map<BlogType>(({ category_keywords, ...row }) => ({
        ...row,
        category_keywords: category_keywords.split(',').map((keyword: string) => keyword.trim())
      }))

      resolve(blogs)
    })
  })
