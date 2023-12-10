// The content model holds the address of different types of content.
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import {textContent} from "./text";
import {slot} from "./page";

export const content = pgTable('content', {
    id: serial('id').primaryKey(),
    type: text('type').notNull(),
    address: text('address').notNull(),
});

export const contentRelations = relations(
    content, ({ one, many }) => ({
        textContent: one(textContent, {
            fields: [content.id],
            references: [textContent.id]
        }),
        slot: many(slot),
    })
);