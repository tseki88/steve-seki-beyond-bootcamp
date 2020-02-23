import { currentProject } from "../index";

const renderList = () => {
    const listContainer = document.getElementById("currentList");
    // Empty and re-render list
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.lastChild);
    }
    
    currentProject.toDoList.map((e) => {
        
        const li = document.createElement("li");
        const checkbox = document.createElement("input")
        checkbox.setAttribute("class", "toDoItem");
        checkbox.setAttribute("id", e.id)
        checkbox.type = "checkbox";
        checkbox.checked = e.completed;
        checkbox.addEventListener("change", () => {
            currentProject.toDoList.findIndex(e.id)
        });
        li.appendChild(checkbox);

        const label = document.createElement("label");
        label.innerHTML = e.title;
        li.appendChild(label);

        listContainer.appendChild(li);
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