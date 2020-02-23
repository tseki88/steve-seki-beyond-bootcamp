import { currentProject } from "../index";

const renderList = () => {
    const listContainer = document.getElementById("currentList");
    // Empty and re-render list
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.lastChild);
    }
    currentProject.toDoList.map((e) => {
        
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "listItem");
        checkbox.checked = e.completed;
        checkbox.addEventListener("change", e.toggleComplete);
        listItem.appendChild(checkbox);

        const titleText = document.createElement("p");
        titleText.innerHTML = e.title;
        listItem.appendChild(titleText);

        listContainer.appendChild(listItem);
        console.log(e)
    })

    // const changeCompletion = () => {
    //     const lists = document.querySelectorAll(".listItem");
    //     lists.forEach((e) => {
    //         e.addEventListener("change", (e) => {
    //             console.log(e)
    //         })
    //     })
    // }
}

export default renderList;