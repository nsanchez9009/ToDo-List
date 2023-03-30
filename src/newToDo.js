import submitToDo from "./submitToDo";
import hideToDo from "./hideToDo";

export default function newToDo(project){
    const toDoCont = document.querySelector("#toDoCont");

    if (toDoCont.textContent === "Select a To-Do"){
        toDoCont.textContent = "";
    }
    
    if (toDoCont.firstChild !== null){
        hideToDo(toDoCont);
    }
    
    const toDoForm = document.createElement("form");
    toDoForm.id = "toDoForm";

    toDoCont.appendChild(toDoForm);
    
    const toDoFormTitle = document.createElement("INPUT");
    toDoFormTitle.id = "toDoFormTitle";
    toDoFormTitle.classList.add("text", "toDoFormInput");
    toDoFormTitle.setAttribute("type", "text");
    toDoFormTitle.setAttribute("placeHolder", "Title");
    toDoFormTitle.setAttribute("maxLength", "16");

    const toDoFormDesc = document.createElement("INPUT");
    toDoFormDesc.id = "toDoFormDesc";
    toDoFormDesc.classList.add("text", "toDoFormInput");
    toDoFormDesc.setAttribute("type", "text");
    toDoFormDesc.setAttribute("placeHolder", "Description");
    toDoFormDesc.setAttribute("maxLength", "50");

    const toDoFormDate = document.createElement("INPUT");
    toDoFormDate.id = "toDoFormDate";
    toDoFormDate.classList.add("text", "toDoFormInput");
    toDoFormDate.setAttribute("type", "date");

    const toDoFormContent = document.createElement("textarea");
    toDoFormContent.id = "toDoFormContent";
    toDoFormContent.classList.add("text", "toDoFormInput");
    toDoFormContent.setAttribute("placeHolder", "Write your to do here...");
    toDoFormContent.setAttribute("maxLength", "1600");

    const toDoFormSubmit = document.createElement("div");
    toDoFormSubmit.id = "toDoFormSubmit";
    toDoFormSubmit.addEventListener("click", () => {
        if (toDoFormTitle.value === ""){
            toDoFormContent.setAttribute("placeHolder", "Please enter a title");
            return;
        }

        submitToDo(project, toDoFormTitle.value, toDoFormDesc.value, toDoFormDate.value, toDoFormContent.value);
    });

    toDoForm.appendChild(toDoFormTitle);
    toDoForm.appendChild(toDoFormDesc);
    toDoForm.appendChild(toDoFormDate);
    toDoForm.appendChild(toDoFormContent);
    toDoForm.appendChild(toDoFormSubmit);
}