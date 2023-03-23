
// Set project name with input, when confirmed, remove input and replace with div with project name
import submitProject from "./submitProject";

const newProject = () => {

    const menu = document.querySelector("#menu");

    const project = document.createElement('div');
    project.classList.add("project");
    project.dataset.project = window.projectNumber;
    
    const projectCont = document.createElement("div");
    projectCont.classList.add("projectCont");

    const projectNameInput = document.createElement("INPUT");
    projectNameInput.id = "projectNameInput";
    projectNameInput.classList.add("text");
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("maxLength", "23");
    projectNameInput.setAttribute("placeHolder", "Project Name");
    projectCont.appendChild(projectNameInput);

    const projectSubmit = document.createElement('div');
    projectSubmit.id = 'projectSubmit';
    projectCont.appendChild(projectSubmit);

    projectSubmit.addEventListener("click", () => {
        submitProject(project, projectCont, projectNameInput);
    });

    const toDoCont = document.createElement('div');
    toDoCont.classList.add("toDoCont");

    project.appendChild(projectCont);
    project.appendChild(toDoCont);
    menu.appendChild(project);
}

export {
    newProject,
}