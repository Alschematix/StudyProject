// database connection variables
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString || '', {max: 1})
const db = drizzle(client);

export { db };