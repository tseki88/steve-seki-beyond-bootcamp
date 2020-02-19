import Project from "./modules/projectClass";
import submitEvent from './modules/eventHandler';

// Initializes a default project
const Main = Project("mainProject");

const headerComponent = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerHTML = `To Do Project`;
    header.appendChild(h1)

    return header;
}

document.body.appendChild(headerComponent());

const formComponent = () => {
    const form = document.createElement("form");
    form.setAttribute("class", "newItem");

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

document.body.appendChild(formComponent());
// links the submit to current project list
submitEvent(Main);
console.log(Main)