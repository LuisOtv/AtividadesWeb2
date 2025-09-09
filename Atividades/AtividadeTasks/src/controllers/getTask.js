import { Database } from "../database/database.js";

export async function getTask(req, res, database) {
  try {
    const tasks = await database.read("tasks");
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(tasks));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erro Interno do Servidor" }));
  }
}
