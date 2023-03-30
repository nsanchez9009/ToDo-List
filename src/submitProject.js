import chevronDown from "./media/arrowDown.png";
import chevronUp from "./media/arrowUP.png";
import viewProject from "./viewProject";
import hideProject from "./hideProject";
import newToDo from "./newToDo";
import hideToDo from "./hideToDo";

export default function submitProject(menu, project, projectCont, input){
    if (input.value === ""){
        input.setAttribute("placeHolder", "Invalid Name");
        return;
    }

    projectCont.textContent = "";

    const projectContLeft = document.createElement('div');
    projectContLeft.classList.add("projectContLeft");
    
    const expandProject = document.createElement('img');
    expandProject.classList.add("expandProject");
    expandProject.src = chevronUp;
    expandProject.addEventListener("click", () => {

        if (expandProject.src === chevronDown){
            const toDoCont = (document.querySelector("#toDoCont") !== null) ? document.querySelector("#toDoCont") : null;

            if (toDoCont !== null && toDoCont.querySelector("#toDoForm") !== null){
                return;
            }

            expandProject.src = chevronUp;
            hideProject(project);
        }
        else {
            console.log("Project: " + project.dataset.project);
            console.log(window.projects[project.dataset.project]);
            
            expandProject.src = chevronDown;
            viewProject(project);
        }
    });
    projectContLeft.appendChild(expandProject);
    
    const projectName = document.createElement("div");
    projectName.textContent = input.value;
    projectName.classList.add("text", "projectName");
    projectContLeft.appendChild(projectName);

    projectCont.appendChild(projectContLeft);

    const addToDo = document.createElement('div');
    addToDo.classList.add("addToDo", "text", "noselect");
    addToDo.textContent = "+";
    addToDo.addEventListener("click", () => {
        newToDo(project);
        expandProject.src = chevronDown;
        viewProject(project);
    });
    projectCont.appendChild(addToDo);

    const deleteProject = document.createElement('div');
    deleteProject.classList.add("deleteProject");
    deleteProject.addEventListener("click", () => {
        menu.removeChild(project);
        hideToDo();
    });
    projectCont.appendChild(deleteProject);

    projectCont.addEventListener("mouseover", () => {
        deleteProject.style.display = "block";
        addToDo.style.display = "block";
    });
    projectCont.addEventListener("mouseout", () => {
        deleteProject.style.display = "none";
        addToDo.style.display = "none";
    });
}