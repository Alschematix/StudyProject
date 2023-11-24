CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	"full_name" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
