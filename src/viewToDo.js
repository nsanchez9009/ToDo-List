export default function viewToDo(toDoCont, toDo, toDoObject){
    if (toDoCont.firstChild.id === "toDoForm" || toDoCont.textContent === "Select a To-Do"){
        toDoCont.textContent = "";
        toDoCont.appendChild(toDo);
    }

    toDoCont.querySelector(".toDoTitle").textContent = toDoObject.title;
    toDoCont.querySelector(".toDoDesc").textContent = toDoObject.desc;
    toDoCont.querySelector(".toDoContent").textContent = toDoObject.content;

    if (toDoObject.date === ""){
        toDoCont.querySelector(".toDoDate").textContent = "No Due Date";
    }
    else {
        toDoCont.querySelector(".toDoDate").textContent = "Due Date: " + toDoObject.date;
    }

    console.log("ToDo selected: " + toDoObject.title);
}