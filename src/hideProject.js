export default function hideProject(project){
    const projectNum = project.dataset.project;

    if (window.projects[projectNum].length === 0){
        project.removeChild(project.lastChild);
    }

    // else {
    //     const ToDos = document.querySelectorAll(".project[projectNum] > .toDos");
    //     ToDos.forEach((toDo) => {
    //         toDo.style.display = "none";
    //     });
    // }
}