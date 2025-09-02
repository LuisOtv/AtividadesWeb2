import http from "node:http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end("Hello, World!\n");
});

server.listen(3000);
console.log("Server running at http://localhost:3000/");
