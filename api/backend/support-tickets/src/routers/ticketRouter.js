export const tickets = [
  {
    method: "GET",
    path: "/tickets",
    controller: (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "ticket pego com sucesso" }));
    },
  },
  {
    method: "POST",
    path: "/tickets",
    controller: (req, res) => {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "ticket adicionado com sucesso" }));
    },
  },
  {
    method: "PUT",
    path: "/tickets",
    controller: (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "ticket atualizado com sucesso" }));
    },
  },
  {
    method: "DELETE",
    path: "/tickets",
    controller: (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "ticket deletado com sucesso" }));
    },
  },
];
