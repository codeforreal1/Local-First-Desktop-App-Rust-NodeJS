import path from 'path'
import { serve } from '@hono/node-server'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { app, db } from '../server'

const PORT = 6969

async function main() {
  migrate(db, {
    migrationsFolder: path.join(__dirname, '../migrations'),
  })

  serve(app)
    .listen(PORT)
    .once('listening', () => {
      console.log(`🚀 Server started on port ${PORT}`)
    })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
