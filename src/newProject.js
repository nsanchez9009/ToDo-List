
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
    projectNameInput.setAttribute("maxLength", "16");
    projectNameInput.setAttribute("placeHolder", "Project Name");
    projectCont.appendChild(projectNameInput);
    projectNameInput.focus();

    const projectSubmit = document.createElement('div');
    projectSubmit.id = 'projectSubmit';
    projectCont.appendChild(projectSubmit);

    projectSubmit.addEventListener("click", () => {
        submitProject(project, projectCont, projectNameInput);
    });

    projectNameInput.addEventListener("keydown", (key) => {
        if (key.key === 'Enter') {
            submitProject(project, projectCont, projectNameInput);
        }
    });

    project.appendChild(projectCont);
    menu.appendChild(project);

    window.projects[window.projectNumber] = [];
}

export {
    newProject,
}