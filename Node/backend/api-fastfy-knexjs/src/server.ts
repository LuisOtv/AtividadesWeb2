import fastify from "fastify";
import { setupKnex } from "./database.ts";

const app = fastify();

app.get("/hello", async () => {
  const tables = await setupKnex("sqlite_schema").select("*");
});

app.listen({ port: 3000 }).then(() => {
  console.log("Server running on http://localhost:3000");
});
