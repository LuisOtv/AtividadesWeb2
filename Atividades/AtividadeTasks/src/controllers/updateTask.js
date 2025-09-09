export async function updateTask(req, res, database) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const tasks = await database.read("tasks");
    const task = tasks.find((task) => task.id === id);

    if (!title || !description) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Titulo e Descrição são obrigatórios" }));
    }

    await database.update("tasks", id, { ...task, title, description, updated_at: new Date() });
    res.writeHead(204);
    return res.end("Task atualizada com sucesso");
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Erro Interno do Servidor" }));
  }
}
