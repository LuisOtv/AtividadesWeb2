import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    this.#init();
  }

  async #init() {
    try {
      const data = await fs.readFile(DATABASE_PATH, "utf-8");
      this.#database = JSON.parse(data);
    } catch {
      await this.#persist();
    }
  }

  async #persist() {
    await fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database, null, 2));
  }

  async insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    await this.#persist();
  }

  async read(table) {
    return this.#database[table] ?? [];
  }

  async update(table, id, data) {
    const index = this.#database[table]?.findIndex((item) => item.id === id);

    if (index > -1) {
      this.#database[table][index] = { id, ...data };
      await this.#persist();
    }
  }

  async delete(table, id) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table] = this.#database[table].filter((item) => item.id !== id);
      await this.#persist();
    }
  }
}
