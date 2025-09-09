import http from "http";
import { routeHandler } from "./middleware/routeHandler.js";

const server = http.createServer((req, res) => {
  routeHandler(req, res).catch((error) => {
    console.error(error);
    res.writeHead(500).end(JSON.stringify({ error: "Erro Interno do Servidor" }));
  });
});
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
