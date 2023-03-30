export default function hideToDo(){
    const toDoCont =  (document.querySelector("#toDoCont")) ? document.querySelector("#toDoCont") : null;

    if (toDoCont === null){
        return;
    }
    else {
        toDoCont.textContent = "Select a To-Do";
    }
}