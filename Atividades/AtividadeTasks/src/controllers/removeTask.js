import { Database } from "../database/database.js";

export async function removeTask(req, res, database) {
  try {
    const { id } = req.params;
    const tasks = await database.read("tasks");
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Task não encontrada" }));
    }

    await database.delete("tasks", id);
    res.writeHead(204);
    return res.end("Task removida com sucesso");
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erro Interno do Servidor" }));
  }
}
