import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { textContent } from "./text";

export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    username: text('username'),
    fullName: text('full_name'),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});

export const userRelations = relations(
    user, ({ many }) => ({ text: many(textContent) })
);