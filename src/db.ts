import type { BlogType } from './models'
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool(import.meta.env.CONNECTION_STRING)

export const getBlogs = async (): Promise<BlogType[]> =>
  new Promise(resolve => {
    pool.getConnection(function (_, conn) {
      conn.query('SELECT * FROM `blogs`', (_, result) => {
        resolve(result as BlogType[])
      })
      pool.releaseConnection(conn)
    })
  })
