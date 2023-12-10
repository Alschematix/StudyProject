// database connection variables
import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as dotenv from 'dotenv';
import * as contentSchema from './db/schema/content';
import * as pageSchema from './db/schema/page';
import * as textSchema from './db/schema/text';
import * as topicSchema from './db/schema/topic';
import * as userSchema from './db/schema/user';


dotenv.config();

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString || '', {max: 1})
const db = drizzle(
    client,
    {
        schema: {
            ...contentSchema,
            ...pageSchema,
            ...textSchema,
            ...topicSchema,
            ...userSchema,
        }
    });

export {db};