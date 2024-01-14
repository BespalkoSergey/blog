import type { BlogType, RowType } from './models'
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool(import.meta.env.CONNECTION_STRING)

export const getBlogs = async (): Promise<BlogType[]> =>
  new Promise(resolve => {
    pool.getConnection(function (_, conn) {
      conn.query('SELECT * FROM `blogs` ORDER BY `blogs`.`updated_at` DESC', (_, result) => {
        const rows = Array.isArray(result) ? (result as RowType[]) : []
        const blogs = rows.map<BlogType>(({ category_keywords, ...row }) => ({
          ...row,
          category_keywords: category_keywords.split(',').map((keyword: string) => keyword.trim())
        }))
        resolve(blogs)
      })
      pool.releaseConnection(conn)
    })
  })
