import {integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { content} from "./content";
import { user } from "./user";
import {topic} from "./topic";

export const page = pgTable('page', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    topicId: integer('topic_id').notNull().references(() => topic.id),
    creatorId: serial('creator_id').notNull().references(() => user.id),
    createdAt: timestamp("created_at").defaultNow(),
});

export const pageRelations = relations(
    page, ({ one, many }) => ({
        creator: one(user, {
            fields: [page.creatorId],
            references: [user.id]
        }),
        topic: one(topic, {
            fields: [page.topicId],
            references: [topic.id]
        }),
        slots: many(slot),
    })
);

export const slot = pgTable('slot', {
    id: serial('id').primaryKey(),
    pageId: integer('page_id').notNull().references(() => page.id),
    contentId: integer('content_id').notNull().references(() => content.id),
});

export const slotRelations = relations(
    slot, ({ one }) => ({
        page: one(page, {
            fields: [slot.pageId],
            references: [page.id]
        }),
        content: one(content, {
            fields: [slot.contentId],
            references: [content.id]
        }),
    })
);
