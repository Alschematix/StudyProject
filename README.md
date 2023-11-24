
## Local Development

Steps to setup local development environment.

### App

1. Run `npm install` to install dependencies

2. Configure `.env.local` and update the values for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

3. Run `npm run dev` to start the local development server

### Database

It may be helpful to set up the database locally for faster development.
You'll need to install the [Supabase CLI](https://supabase.com/docs/guides/cli) (`npm install supabase --save-dev
`) and [Docker Desktop](https://docs.docker.com/desktop).
Detailed steps can be found in the [Supabase CLI Docs](https://supabase.com/docs/guides/cli/getting-started).

4. Run `supabase start` to launch the Supabase stack.
5. Add the `DB_URL` variable as `DATABASE_URL` to your `.env` file.

#### Migrations

> **WARNING**: Migrations aren't working. Use `drizzle-kit push:pg` instead.

Use migrations to create and update tables and other database objects. https://orm.drizzle.team/docs/migrations

1. Run `npx drizzle-kit generate:pg` to generate a migration file.
2. Run `npm run migrate` to run the migration.

