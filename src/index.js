import "./style.css";
import { initPage } from "./initPage";
import { newProject } from "./newProject";

initPage();

window.projects = [];
window.projectNumber = 0;

const addProject = document.querySelector("#addProject");
addProject.addEventListener("click", () => {
    if (document.querySelectorAll("#projectNameInput").length > 0){
        return;
    }

    newProject();
    projectNumber++;
});


// Fix delete on everything. Not deleting properly.