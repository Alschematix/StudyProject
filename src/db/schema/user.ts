import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    username: text('username'),
    fullName: text('full_name'),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});