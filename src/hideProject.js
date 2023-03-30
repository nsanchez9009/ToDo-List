export default function hideProject(project){
    const projectNum = project.dataset.project;

    if (project.querySelector(".emptyProject") !== null){
        project.removeChild(project.lastChild);
    }

    else {
        const ToDos = project.querySelectorAll(".toDoName");
        ToDos.forEach((toDo) => {
            toDo.style.display = "none";
        });
    }
}