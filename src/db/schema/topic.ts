import {pgTable, serial, text} from "drizzle-orm/pg-core";

export const topic = pgTable('topic', {
    id: serial('id').primaryKey(),
    name: text('name'),
});