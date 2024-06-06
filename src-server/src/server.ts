import 'dotenv/config'

import { zValidator } from '@hono/zod-validator'
import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { type z } from 'zod'
import env from './env'
import { insertUserSchema, selectUserSchema, users } from './schema'

const client = new Database(env.DATABASE_URL)
export const db: BetterSQLite3Database = drizzle(client)

export const app = new Hono()

app.onError((err, ctx) => {
  if ('format' in err) {
    console.error(JSON.stringify((err as z.ZodError).format(), undefined, 2))
  } else {
    console.error(err)
  }
  return ctx.json({ error: 'Internal Server Error' }, 500)
})

app.use('*', cors())

const listUsersResponse = selectUserSchema.array()

app.get('/users', async (ctx) => {
  const allUsers = db.select().from(users).all()
  return ctx.json(listUsersResponse.parse(allUsers))
})

const insertUserRequest = insertUserSchema.pick({
  name: true,
  email: true,
})
const insertUserResponse = selectUserSchema

app.post('/users', zValidator('json', insertUserRequest), async (ctx) => {
  const data = ctx.req.valid('json')
  const user = db.insert(users).values(data).returning().get()
  return ctx.json(insertUserResponse.parse(user))
})
