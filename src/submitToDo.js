import viewProject from "./viewProject";

export default function submitToDo(project, title, desc, date, content){
    const projectNumber = project.dataset.project;

    const toDoObject = {
        title: title,
        desc: desc,
        date: date,
        content: content,
    };

    window.projects[projectNumber].push(toDoObject);

    const toDoCont = document.querySelector("#toDoCont");
    toDoCont.textContent = "";

    const toDo = document.createElement("div");
    toDo.classList.add("toDo");

    const toDoTitle = document.createElement("div");
    toDoTitle.classList.add("text", "toDoTitle");
    toDoTitle.textContent = title;

    const toDoDesc = document.createElement("div");
    toDoDesc.classList.add("text", "toDoDesc");
    toDoDesc.textContent = desc;

    const toDoDate = document.createElement("div");
    toDoDate.classList.add("text", "toDoDate");
    toDoDate.textContent = date;

    const toDoContent = document.createElement("div");
    toDoContent.classList.add("text", "toDoContent");
    toDoContent.textContent = content;

    const toDoDelete = document.createElement("div");
    toDoDelete.classList.add("toDoDelete");

    toDo.appendChild(toDoTitle);
    toDo.appendChild(toDoDesc);
    toDo.appendChild(toDoDate);
    toDo.appendChild(toDoContent);
    toDo.appendChild(toDoDelete);

    toDoCont.appendChild(toDo);

    viewProject(project);
}
