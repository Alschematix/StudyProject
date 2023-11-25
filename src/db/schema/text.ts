// The text model holds text content.
import { pgTable, serial, integer, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { user } from "./user";
import { relations } from "drizzle-orm";

export const textContent = pgTable('text', {
    id: serial('id').primaryKey(),
    title: text('title'),
    body: text('body'),
    authorId: integer('author_id').references(() => user.id),
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const textContentRelations = relations(
    textContent, ({ one }) => ({
          author: one(user, {
                fields: [textContent.authorId],
                references: [user.id]
          })
        })
);