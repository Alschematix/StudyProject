// The text model holds text content.
import { pgTable, serial, integer, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { user } from "./user";
import { relations } from "drizzle-orm";

export const textContentCategory = pgTable('text_category', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
});

export const textContentCategoryRelations = relations(
    textContentCategory, ({ many }) => ({
        textContent: many(textContent)
    })
);

export const textContent = pgTable('text', {
    id: serial('id').primaryKey(),
    authorId: integer('author_id').notNull().references(() => user.id),
    categoryId: integer('category_id').notNull().references(() => textContentCategory.id),
    title: text('title'),
    body: text('body').notNull(),
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const textContentRelations = relations(
    textContent, ({ one }) => ({
        author: one(user, {
            fields: [textContent.authorId],
            references: [user.id]
        }),
        textContent: one(textContentCategory, {
            fields: [textContent.categoryId],
            references: [textContentCategory.id]
        })
    })
);