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