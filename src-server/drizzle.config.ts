import { Config } from 'drizzle-kit'
import env from './src/env'

export default {
  out: './migrations',
  schema: './src/schema.ts',
  breakpoints: true,
  dialect: 'sqlite',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
