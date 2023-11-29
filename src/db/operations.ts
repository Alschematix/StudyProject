// Database CRUD operations
import {textContent} from './schema/text';
import {content} from './schema/content';
import {drizzle} from "drizzle-orm/postgres-js";

async function insertTextContent(db: ReturnType<typeof drizzle>, data: (typeof textContent.$inferInsert)[]) {

    await db.transaction(async (db) => {

        const result = await db.insert(textContent).values(
            data
        ).returning({textContentId: textContent.id});


        await db.insert(content).values(
            result.map(({textContentId}) => ({
                    type: 'text',
                    address: textContentId.toString(),
                }
            ))
        )

    });

}

export {insertTextContent};