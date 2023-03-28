const initPage = () => {
    const body = document.querySelector("body");

    const main = document.createElement("div");
    main.id = "main";
    body.appendChild(main);


    const header = document.createElement("div");
    header.id = 'header';
    header.classList.add("text");
    header.textContent = "To-Do List";
    main.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    main.appendChild(content);

    const menu = document.createElement("div");
    menu.id = "menu";
    content.appendChild(menu);

    const toDoCont = document.createElement('div');
    toDoCont.id = 'toDoCont';
    toDoCont.textContent = "Select a To-Do";
    toDoCont.classList.add("text");
    content.appendChild(toDoCont);

    const addProject = document.createElement('div');
    addProject.id = 'addProject';
    menu.appendChild(addProject);
}

export {
    initPage,
}