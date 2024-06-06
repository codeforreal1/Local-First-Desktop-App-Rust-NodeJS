import 'dotenv/config'

export const envs = {
  DATABASE_URL: process.env.DATABASE_URL as string,
}

export default envs
