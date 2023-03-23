import chevronDown from "./media/chevron-down.svg";
import chevronUp from "./media/chevron-up.svg";
import viewProject from "./viewProject";
import hideProject from "./hideProject";

export default function submitProject(project, projectCont, input){
    projectCont.textContent = "";
    projectCont.classList.add("addedProject");
    
    const expandProject = document.createElement('img');
    expandProject.classList.add("expandProject");
    expandProject.src = chevronUp;
    expandProject.addEventListener("click", () => {
        if (expandProject.src === chevronDown){
            expandProject.src = chevronUp;
            hideProject(project);
        }
        else {
            expandProject.src = chevronDown;
            viewProject(project);
        }

    });
    projectCont.appendChild(expandProject);
    
    const projectName = document.createElement("div");
    projectName.textContent = input.value;
    projectName.classList.add("text", "projectName");
    projectCont.appendChild(projectName);
}