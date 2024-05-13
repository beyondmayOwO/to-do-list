import { exampleProject } from "./example-project";
import { Task } from "./task-class";

export function addNewTask() {
  const newTask = new Task("Biology revision", "May 20, 2024", "High", false);
  exampleProject.push(newTask);
}