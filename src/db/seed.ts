import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import { user } from "./schema/user";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

if (!("DATABASE_URL" in process.env))
    throw new Error("DATABASE_URL not found on .env.local");

const main = async () => {
    const client = postgres(process.env.DATABASE_URL || '', {max: 1});
    const db = drizzle(client);
    const data: (typeof user.$inferInsert)[] = [];

    for (let i = 0; i < 20; i++) {
        data.push({
            username: faker.internet.userName(),
            fullName: faker.person.fullName(),
        });
    }

    console.log("Seed start");
    await db.insert(user).values(data);
    console.log("Seed done");
};

main();