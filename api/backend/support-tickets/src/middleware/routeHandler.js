import { routes } from "../routers/index.js";

export const routeHandler = async (req, res) => {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });
  if (route) {
    return route.controller(req, res);
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
};
