import toDoController from './modules/toDoController';

// Initial DOM Render
const headerComponent = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerHTML = `To Do Project`;
    header.appendChild(h1)

    return header;
}

const formComponent = () => {
    const form = document.createElement("form");
    form.setAttribute("class", "newItem");

    // FormElement Helper
    const createFormElement = (element, attributes) => {
        const newElement = document.createElement(element);

        for (let key in attributes) {
            newElement.setAttribute(key, attributes[key])
        }

        form.appendChild(newElement)
    }

    createFormElement("label", {"for": "title"});
    createFormElement("input", {
        "type": "text", 
        "placeholder": "Add Note Here", 
        "id": "title"
    })

    createFormElement("input", {
        "type": "submit",
        "value": "Add New Item",
    })

    return form
}


const listComponent = () => {
    const ul = document.createElement("ul");
    ul.setAttribute("id", "currentList")
    return ul;
}

const root = document.getElementById("content");
root.appendChild(headerComponent());
root.appendChild(formComponent());
root.appendChild(listComponent());    

toDoController.init();