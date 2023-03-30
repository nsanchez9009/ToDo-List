import hideToDo from "./hideToDo";
import viewProject from "./viewProject";
import viewToDo from "./viewToDo";

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
    if (date === "") {
        toDoDate.textContent = "No Due Date";
    }
    else {
        toDoDate.textContent = "Due Date: " + date;
    }

    const toDoContent = document.createElement("div");
    toDoContent.classList.add("text", "toDoContent");
    toDoContent.textContent = content;

    const toDoDelete = document.createElement("div");
    toDoDelete.classList.add("toDoDelete");
    toDoDelete.addEventListener("click", () => {
        hideToDo();
        project.removeChild(toDoNameMenu);
        viewProject(project);
    });

    toDo.appendChild(toDoTitle);
    toDo.appendChild(toDoDesc);
    toDo.appendChild(toDoDate);
    toDo.appendChild(toDoContent);
    toDo.appendChild(toDoDelete);

    toDoCont.appendChild(toDo);

    const toDoNameMenu = document.createElement('div');
    toDoNameMenu.classList.add("toDoName", "text");
    toDoNameMenu.textContent = toDoObject.title;
    toDoNameMenu.addEventListener("click", () => {
        viewToDo(toDoCont, toDo, toDoObject);
    });

    project.appendChild(toDoNameMenu);

    viewProject(project);
}
