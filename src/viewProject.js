export default function viewProject(project){
    console.log(window.projects[project.dataset.project]);

    const projectNum = project.dataset.project;

    if (window.projects[projectNum].length === 0){
        if (project.querySelector(".emptyProject") !== null){
            return;
        }

        const empty = document.createElement('div');
        empty.classList.add("emptyProject", "text");
        empty.textContent = "This project is empty";
        project.appendChild(empty);

        return;
    }

    if (project.querySelector(".emptyProject") !== null){
        project.removeChild(project.querySelector(".emptyProject"));
    }

    const ToDos = project.querySelectorAll(".toDoName");
    ToDos.forEach((toDo) => {
        toDo.style.display = "block";
    });
}