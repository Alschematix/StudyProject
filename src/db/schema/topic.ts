import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { page } from "./page";

export const topic = pgTable('topic', {
    id: serial('id').primaryKey(),
    name: text('name'),
});

export const topicRelations = relations(
    topic, ({ many }) => ({
        page: many(page),
    })
);