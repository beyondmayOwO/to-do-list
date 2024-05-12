import { generateJoke } from "./joke";
import './styles.css';
import project from './assets/project-icon.svg';

const projectIcon = document.querySelector('#project-icon');
projectIcon.src = project;

console.log(12345);
console.log(generateJoke());