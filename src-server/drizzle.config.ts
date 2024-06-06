import { Config } from "drizzle-kit";
import { DATABASE_URL } from "./src/env";

export default {
  out: "./migrations",
  schema: "./src/schema.ts",
  breakpoints: true,
  dialect: "sqlite",
  dbCredentials: {
    url: DATABASE_URL,
  },
} satisfies Config;
