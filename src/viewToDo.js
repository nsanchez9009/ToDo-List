import hideToDo from "./hideToDo";

export default function viewToDo(toDoCont, toDo, toDoObject){
    if (toDoCont.firstChild.id === "toDoForm" || toDoCont.textContent === "Select a To-Do"){
        hideToDo(toDoCont);
        toDoCont.appendChild(toDo);
    }

    toDoCont.querySelector(".toDoTitle").textContent = toDoObject.title;
    toDoCont.querySelector(".toDoDesc").textContent = toDoObject.desc;
    toDoCont.querySelector(".toDoDate").textContent = toDoObject.date;
    toDoCont.querySelector(".toDoContent").textContent = toDoObject.content;

    console.log("ToDo selected: " + toDoObject.title);
}