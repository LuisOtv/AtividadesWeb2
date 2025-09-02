export const tickets = [
  {
    method: "GET",
    path: "/tickets",
    controler: (req, res) => {
      res.end("ticket criado com sucesso");
    },
  },
];
