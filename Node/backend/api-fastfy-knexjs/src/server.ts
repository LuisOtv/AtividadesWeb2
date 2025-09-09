import fastify from "fastify";

const app = fastify();

app.get("/hello", (request, reply) => {
  return reply.send("Ok");
});

app.listen({ port: 3000 }).then(() => {
  console.log("Server running on http://localhost:3000");
});
