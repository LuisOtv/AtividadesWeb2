import { routes } from "../routers/index.js";

export const routeHandler = (req, res) => {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });
  if (route) {
    return route.controler({ req, res });
  }
  return res.writeHead(404, { "Content-Type": "text/plain" }).end("Not Found");
};
