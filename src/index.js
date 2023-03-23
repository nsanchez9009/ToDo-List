import "./style.css";
import { initPage } from "./initPage";
import { newProject } from "./newProject";

initPage();

window.projects = [];
window.projectNumber = 0;

const addProject = document.querySelector("#addProject");
addProject.addEventListener("click", () => {
    newProject();
    projectNumber++;
});


// Project number is a dataset that contains the index to projects, which is a 2d array of to do's. Each index is a project, which then has to dos. Each todo is an object with information.
