import http from "node:http";
import { jsonHandler } from "./middleware/jsonHandler.js";
import { routeHandler } from "./middleware/routeHandler.js";

const server = http.createServer(async (req, res) => {
  try {
    await jsonHandler(req, res);
    await routeHandler(req, res);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
