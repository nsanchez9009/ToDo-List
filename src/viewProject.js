export default function viewProject(project){
    console.log(window.projects[project.dataset.project]);

    const projectNum = project.dataset.project;

    if (window.projects[projectNum].length === 0){
        const empty = document.createElement('div');
        empty.classList.add("emptyProject", "text");
        empty.textContent = "This project is empty";
        project.appendChild(empty);

        return;
    }

    for (let i = 0; i < window.projects[projectNum].length; i++){
        const toDoName = document.createElement('div');
        toDoName.classList.add("toDoName", "text");
        toDoName.textContent = window.projects[projectNum][i].title;
        project.appendChild(toDoName);
    }
}