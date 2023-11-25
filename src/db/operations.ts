// Database CRUD operations
import { textContent } from './schema/text';
import { content } from './schema/content';
import { db } from '../db';

async function insertTextContent(title: string, body: string, authorId: number, categoryId: number) {

    await db.transaction(async (db) => {

        const result = await db.insert(textContent).values({
            title: title,
            body: body,
            authorId: authorId,
            categoryId: categoryId,
        }).returning({ textContentId: textContent.id });


        await db.insert(content).values({
            type: 'text',
            address: result[0].textContentId.toString(),
        })

    });

}

export { insertTextContent };