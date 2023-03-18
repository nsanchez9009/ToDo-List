import "./style.css";
import { initPage } from "./initPage";
import { newProject } from "./newProject";

initPage();

const addProject = document.querySelector("#addProject");
addProject.addEventListener("click", () => {
    newProject();
});