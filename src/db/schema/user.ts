import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { textContent } from "./text";
import { page } from "./page";

export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    username: text('username').notNull().unique(),
    fullName: text('full_name'),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});

export const userRelations = relations(
    user, ({ many }) => ({
        text: many(textContent),
        page: many(page),
    })
);
