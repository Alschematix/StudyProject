import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    schema: "./src/db/schema/*",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
    verbose: true,
    strict: true,
    out: "./drizzle",
})