import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex("courses").insert([{ name: "CC" }, { name: "Angular" }, { name: "React" }, { name: "Go" }, { name: "Git" }]);
}
