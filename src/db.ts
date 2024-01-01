import type { BlogType } from './models'
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool(import.meta.env.CONNECTION_STRING)

export const getBlogs = async (): Promise<BlogType[]> =>
  new Promise(resolve => {
    pool.getConnection(function (_, conn) {
      conn.query('SELECT * FROM `blogs`', (_, result) => {
        const blogs = (result ?? []) as BlogType[]
        const sortedFromNearestToLatestDate = blogs.toSorted((a, b) => (new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()) * -1)
        resolve(sortedFromNearestToLatestDate)
      })
      pool.releaseConnection(conn)
    })
  })
