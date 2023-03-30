export default function hideProject(project){
    const projectNum = project.dataset.project;

    if (window.projects[projectNum].length === 0){
        project.removeChild(project.lastChild);
    }

    else {
        const ToDos = project.querySelectorAll(".toDoName");
        ToDos.forEach((toDo) => {
            toDo.style.display = "none";
        });
    }
}