import { Task } from "./task-class";
import { exampleProject } from "./example-project";
import { addNewTask } from "./add-new-task";
import './styles.css';
import project from './assets/project-icon.svg';

const projectIcon = document.querySelector('#project-icon');
projectIcon.src = project;

addNewTask();

console.log(Task);
console.log(exampleProject);