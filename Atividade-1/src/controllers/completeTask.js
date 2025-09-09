export async function completeTask(req, res, database) {
  try {
    const { id } = req.params;
    const tasks = await database.read("tasks");
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Task não encontrada" }));
    }

    await database.update("tasks", id, { ...task, completed_at: new Date() });
    res.writeHead(204);
    return res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erro Interno do Servidor" }));
  }
}
