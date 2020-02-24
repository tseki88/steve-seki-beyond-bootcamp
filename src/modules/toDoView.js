const toDoView = () => {
    
    const renderList = () => {
        
        const listComponent = () => {
            const ul = document.createElement("ul");
            ul.setAttribute("id", "currentList")
            return ul;
        }

        const root = document.getElementById("content");
        root.appendChild(listComponent());    
        
    }
        
    const displayItems = (toDoList) => {

        const ul = document.getElementById("currentList");
        // Empty and re-render list
        while (ul.firstChild) {
            ul.removeChild(ul.lastChild);
        }
        
        toDoList.forEach((e) => {            
            const li = document.createElement("li");
            const checkbox = document.createElement("input")
            checkbox.setAttribute("class", "toDoItem");
            checkbox.setAttribute("id", e.id)
            checkbox.type = "checkbox";
            checkbox.checked = e.completed;
            li.appendChild(checkbox);
    
            const label = document.createElement("label");
            label.innerHTML = e.title;
            li.appendChild(label);
    
            ul.appendChild(li);
            console.log(e)
        })
    }

    return {
        renderList,
        displayItems,
    }
}

export default toDoView;