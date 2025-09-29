import Fastify from "fastify";
import knex from "knex";

const app = fastify()

app.app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})
