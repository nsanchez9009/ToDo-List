

const newProject = () => {

    const menu = document.querySelector("#menu");
    
    const projectCont = document.createElement("div");
    const revealContents = document.createElement("div");
    const projectName = document.createElement('div');
    const deleteProject = document.createElement('div');

    const projectNameInput = document.createElement("INPUT");
    projectNameInput.id = "projectNameInput";
    projectNameInput.classList.add("text")
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("maxLength", "23");
    projectNameInput.setAttribute("placeHolder", "Project Name");
    projectCont.appendChild(projectNameInput);

    menu.appendChild(projectCont);




}

export {
    newProject,
}