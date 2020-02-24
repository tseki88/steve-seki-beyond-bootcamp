import app from './toDoModel';
import toDoView, { projectView } from './toDoView';

const toDoController = (() => {
    
    const addToDoEvent = () => {
        document.querySelector(".newItem").addEventListener("submit", (e) => {
            e.preventDefault();
            const noteValue = document.querySelector("#title").value;
            app.defaultProject.addToList(noteValue);
            render();
            e.target.reset();
        })
    }

    const view = toDoView();
    
    // Refreshes list and Reattaches all eventHandlers
    const render = () => {
        view.displayItems(app.defaultProject.getList());
        view.bindToggle(toggleToDoEvent);
        view.bindDelete(deleteToDoEvent);
    }

    const deleteToDoEvent = (e) => {
        const itemId = e.target.parentElement.id;
        app.defaultProject.removeFromList(itemId);
        render();
    };
    
    const toggleToDoEvent = (e) => {
        const itemId = e.target.parentElement.id;
        app.defaultProject.toggleComplete(itemId);
        render();
    }
    
    
    const init = () => {
        addToDoEvent();
        view.displayItems(app.defaultProject.getList());
        projectView().displayProjects(app.initProject.getProjectList()),
        view.bindToggle(toggleToDoEvent);
    }

    return {init}

})();

export default toDoController;