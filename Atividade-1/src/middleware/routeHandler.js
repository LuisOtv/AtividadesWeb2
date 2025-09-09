import url from "url";
import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { jsonHandler } from "./jsonHandler.js";
const database = new Database();

export async function routeHandler(req, res) {
  await jsonHandler(req, res);

  const parsedUrl = url.parse(req.url, true);
  const parts = parsedUrl.pathname.split("/").slice(1);
  const pathname = "/" + parts[0];

  req.params = {};
  if (parts[1]) {
    req.params.id = parts[1];
  }

  const route = routes.find((route) => {
    const routeParts = route.path.split("/");
    return route.method === req.method && routeParts[1] === parts[0];
  });

  if (route) {
    return await route.handler(req, res, database);
  }

  return res.writeHead(404).end();
}
