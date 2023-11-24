import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from 'postgres'
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString || '', {max: 1})
const db = drizzle(client);

await migrate(db, { migrationsFolder: "drizzle" });