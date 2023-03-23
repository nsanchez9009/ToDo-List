export default function viewProject(project){
    console.log(window.projects[project.dataset.project]);

    if (window.projects[project.dataset.project] === undefined){
        const empty = document.createElement('div');
        empty.classList.add("emptyProject", "text");
        empty.textContent = "This project is empty";
        project.appendChild(empty);
    }
}