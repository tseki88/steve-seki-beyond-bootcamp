import { currentProject } from "../index";

const renderList = () => {
    const listContainer = document.getElementById("currentList");
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.lastChild);
    }

    currentProject.toDoList.map((e) => {
        
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox");
        listItem.appendChild(checkbox);
        const titleText = document.createElement("p");
        titleText.innerHTML = e.title;
        listItem.appendChild(titleText);

        listContainer.appendChild(listItem);
    })
}

export default renderList;