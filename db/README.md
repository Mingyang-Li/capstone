<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Capstone project database migration scripts

## Installation

```bash
$ yarn
```

## Prisma ORM

```bash
# If it is your first time working on this project on your current machine, or every time our remote PostgreSQL DB is updated, we need to introspect the latest schema then apply it to our schema.prisma file
$ npx prisma db pull

# Once we have the latest schema.prisma (local schema is in sync with remote DB schema), we need to generate a new prisma client that works in collaboration with the latest schema. Therefore, we need to run the following command
$ npx prisma generate

# Seeding the database
$ npx prisma db seed
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Issues & resolutions

When migrating HeartRate (roughlu 150K rows per person), I came across this issue:

```bash
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

Resolution:
In capstone/db terminal, enter the following command:
`set NODE_OPTIONS=--max_old_space_size=100000`

The command above increases the memory size. We had to migrate 6,796,417 (6.79 million) rows of `HeartRate`, therefore a large memory size was required

Output log of the succeeded migration for `HeartRate` table

```bash
C:\Users\admin\My PC (DESKTOP)\Desktop\capstone\db>npx prisma db seed
Environment variables loaded from .env
Running seed command `ts-node prisma/seed.ts` ...
✔️ Got all HeartRate file paths
✔️ Got all file data
⌛ === Migrating HeartRate file for person 1
⌛ === Migrating 1573165 rows of HeartRate for person 1
⌛ === Migrating HeartRate file for person 2
⌛ === Migrating 1472629 rows of HeartRate for person 2
⌛ === Migrating HeartRate file for person 3
⌛ === Migrating 808341 rows of HeartRate for person 3
⌛ === Migrating HeartRate file for person 4
⌛ === Migrating 1571315 rows of HeartRate for person 4
⌛ === Migrating HeartRate file for person 5
⌛ === Migrating 1370967 rows of HeartRate for person 5
✔️ === Completed migrating 808341 rows of HeartRate for person 3
✔️ === Completed migrating 1370967 rows of HeartRate for person 5
✔️ === Completed migrating 1472629 rows of HeartRate for person 2
✔️ === Completed migrating 1571315 rows of HeartRate for person 4
✔️ === Completed migrating 1573165 rows of HeartRate for person 1
```
