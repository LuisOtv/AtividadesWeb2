import { knex, Knex } from "knex";

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./src/migrations",
  },
};

export const setupKnex = knex();
