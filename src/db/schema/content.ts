// The content model holds the address of different types of content.
import { pgTable, serial, integer, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import {textContent} from "./text";

export const content = pgTable('content', {
    id: serial('id').primaryKey(),
    type: text('type'),
    address: text('address'),
});

export const contentRelations = relations(
    content, ({ one }) => ({textContent: one(textContent)})
);