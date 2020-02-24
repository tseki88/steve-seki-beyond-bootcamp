const toDoView = () => {
        
    const displayItems = (toDoList) => {
        const ul = document.getElementById("currentList");
        // Empty and re-render list
        while (ul.firstChild) {
            ul.removeChild(ul.lastChild);
        }
        
        toDoList.forEach((e) => {            
            const li = document.createElement("li");
            li.setAttribute("id", e.id)
            
            const checkbox = document.createElement("input")
            checkbox.setAttribute("class", "toDoItem");
            checkbox.type = "checkbox";
            checkbox.checked = e.isCompleted;
            li.appendChild(checkbox);
                        
            const label = document.createElement("label");
            label.setAttribute("class", "toDoText");
            if (e.isCompleted) {
                label.classList.add("toDoComplete");
            }
            label.innerHTML = e.title;
            li.appendChild(label);

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("class","deleteButton");
            // deleteButton.setAttribute("")
            deleteButton.innerHTML = "delete";
            li.appendChild(deleteButton);
            
            ul.appendChild(li);
        })        
    }
    
    const bindDelete = (handler) => {
        document.querySelectorAll(".deleteButton").forEach((e) => {
            e.addEventListener("click", handler);
        })
    }

    const bindToggle = (handler) => {
        document.querySelectorAll(".toDoText").forEach((e) => {
            e.addEventListener("click", handler);
        })

        document.querySelectorAll(".toDoItem").forEach((e) => {
            e.addEventListener("change", handler);
        })
    }

    return {
        displayItems,
        bindToggle,
        bindDelete,
    }
}

const projectView = () => {
    const displayProjects = (project) => {
        const ul = document.getElementById("projectList");
        while (ul.firstChild) {
            ul.removeChild(ul.lastChild);
        }

        project.forEach((e) => {
            const li = document.createElement("li");
            li.setAttribute("id", e.id)
            
            const label = document.createElement("label");
            label.setAttribute("class", "toDoText");
            // if (e.isCompleted) {
            //     label.classList.add("toDoComplete");
            // }
        
            label.innerHTML = e.project.getTitle();
            li.appendChild(label);

            // const deleteButton = document.createElement("button");
            // deleteButton.setAttribute("class","deleteButton");
            // deleteButton.innerHTML = "delete";
            // li.appendChild(deleteButton);
            
            ul.appendChild(li);
        })
    }

    return {
        displayProjects,
    }
}

export default toDoView;
export { projectView };