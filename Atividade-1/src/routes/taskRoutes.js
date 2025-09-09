import { addTask } from "../controllers/addTask.js";
import { getTask } from "../controllers/getTask.js";
import { updateTask } from "../controllers/updateTask.js";
import { removeTask } from "../controllers/removeTask.js";
import { completeTask } from "../controllers/completeTask.js";

export const taskRoutes = [
  { method: "POST", path: "/tasks", handler: addTask },
  { method: "GET", path: "/tasks", handler: getTask },
  { method: "PUT", path: "/tasks/:id", handler: updateTask },
  { method: "DELETE", path: "/tasks/:id", handler: removeTask },
  { method: "PATCH", path: "/tasks/:id/complete", handler: completeTask },
];
