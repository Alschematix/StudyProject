// Database CRUD operations
import {textContent} from './schema/text';
import {content} from './schema/content';
import {PostgresJsDatabase} from "drizzle-orm/postgres-js";
import {page, slot} from "./schema/page";
import {eq, inArray} from "drizzle-orm";
import {db} from '../db';


/*
 * Insert text content into the database.
 */
async function insertTextContent(db: PostgresJsDatabase, data: (typeof textContent.$inferInsert)[]) {

    await db.transaction(async (db) => {

        const result = await db.insert(textContent).values(
            data
        ).returning({textContentId: textContent.id});


        await db.insert(content).values(
            result.map(({textContentId}) => ({
                    type: 'text',
                    address: textContentId.toString(),
                })
            )
        )

    });

}

interface Content {
    address: string;
    type: string;
    value: string;
}

/*
 * Fetch content from the database.
 */
export const fetchContent = async (contentIds: number[]) => {
    const contentMap = new Map<number, Content | undefined>();
    const contents = await db.query.content.findMany({
        where: inArray(content.id, contentIds),
    })
    for (const {address, id, type} of contents) {
        if (type === 'text') {
            const result = await db.select({
                value: textContent.body,
            }).from(textContent).where(eq(textContent.id, parseInt(address)));
            if (result.length !== 1) {
                contentMap.set(id, undefined);
            }
            const {value} = result[0];
            contentMap.set(id, {address, type: type, value});
        } else {
            throw new Error(`Unknown content type: ${type}`);
        }
    }
    return contentMap;
}

/*
 * Fetch page data and content from the database.
 */
export const fetchPageData = async (pageId: number) => {
    // Query the page
    // This should be able to be done in one query.
    const resultPage = await db.query.page.findFirst({
        where: eq(page.id, pageId),
    });
    if (!resultPage) {
        throw new Error(`Page ${pageId} not found`);
    }

    // Query the slots
    const slots = await db.query.slot.findMany({
        where: eq(slot.pageId, pageId)
    });
    if (slots.length === 0) {
        return {resultPage, content: []};
    }

    // Fetch the content
    const contentIds = slots.map((slot: { contentId: number }) => slot.contentId);
    const contentMap = await fetchContent(contentIds);

    return {resultPage, content: Array.from(contentMap.values())};
}

export {insertTextContent};