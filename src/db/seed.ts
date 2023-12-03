import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import { user } from "./schema/user";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
import {textContent, textContentCategory} from "./schema/text";
import Ajv from "ajv";
import * as fs from "fs";
import * as readline from "readline";
import {insertTextContent} from "../db/operations";
import { content } from './schema/content';
dotenv.config({ path: "./.env.local" });
const ajv = new Ajv();

if (!("DATABASE_URL" in process.env))
    throw new Error("DATABASE_URL not found on .env.local");

function getUsers(count: number = 20) : (typeof user.$inferInsert)[] {
    const data: (typeof user.$inferInsert)[] = [];

    data.push({
        id: 1,
        username: "rowdy",
        fullName: "Alex"
    })

    for (let i = 0; i < count - 1; i++) {
        data.push({
            username: faker.internet.userName(),
            fullName: faker.person.fullName(),
        });
    }
    return data;
}

function getContent(path: string) : {textContentCategoryData: (typeof textContentCategory.$inferInsert)[], textContentData: (typeof textContent.$inferInsert)[]} {

    // define the schema
    interface seedEntry {
        category: string;
        content: (typeof textContent.$inferInsert)[];
    }

    interface seedContent extends Array<seedEntry>{}

    const schema = {
        type: "array",
        items: {
            type: "object",
            properties: {
                category: { type: "string" },
                content: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            title: { type: "string" },
                            body: { type: "string" },
                            metadata: { type: "object" },
                        },
                        required: ["body"],
                    },
                },
            },
            required: ["category", "content"],
        },
    };

    const validate = ajv.compile<seedContent>(schema);

    // parse the JSON file
    const jsonContent = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (!validate(jsonContent)) {
        console.log(validate.errors);
        throw new Error("Invalid JSON");
    }

    const textContentCategoryData: (typeof textContentCategory.$inferInsert)[] = [];
    const textContentData: (typeof textContent.$inferInsert)[] = [];

    // iterate over the parsed object
    for (const [i, entry] of jsonContent.entries()) {
        textContentCategoryData.push({
            id: i + 1,
            name: entry["category"]
        });
        for (const subEntry of entry["content"]) {
            textContentData.push({
                title: subEntry["title"],
                body: subEntry["body"],
                metadata: subEntry["metadata"],
                authorId: 1,
                categoryId: i + 1
            });
        }
    }

    return {textContentCategoryData, textContentData};
}


async function seed(db: ReturnType<typeof drizzle>) {
    const userData = getUsers();
    const {textContentCategoryData, textContentData} = getContent('./src/db/seed_content.json');

    console.log("Delete start");
    await db.delete(textContent);
    await db.delete(content);
    await db.delete(textContentCategory);
    await db.delete(user);
    console.log("Delete done");

    console.log("Seed start");
    await db.insert(user).values(userData);
    await db.insert(textContentCategory).values(textContentCategoryData);
    await insertTextContent(db, textContentData);
    console.log("Seed done");

}

const main = async () => {
    const client = postgres(process.env.DATABASE_URL || '', {max: 1});
    const db = drizzle(client);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("WARNING: Seeding replaces existing data!")
    rl.question("Are you sure you want to seed the database? (y/n) ", async (answer) => {
        if (answer === "y") {
            await seed(db);
        } else {
            console.log("Seed cancelled");
        }
        rl.close();
    });
};

main();