import app from './toDoModel';
import toDoView from './toDoView';

const toDoController = (() => {
    
    const addToDoEvent = () => {
        document.querySelector(".newItem").addEventListener("submit", (e) => {
            e.preventDefault();
            const noteValue = document.querySelector("#title").value;
            app.addToList(noteValue);
            render();
        })
    }

    const view = toDoView();
    
    const render = () => {
        view.displayItems(app.getList());
        view.bindToggle(toggleToDoEvent);
        view.bindDelete(deleteToDoEvent);
    }

    const deleteToDoEvent = (e) => {
        const itemId = e.target.parentElement.id;
        app.removeFromList(itemId);
        render();
    };
    
    const toggleToDoEvent = (e) => {
        const itemId = e.target.parentElement.id;
        app.toggleComplete(itemId);
    }
    
    
    const init = () => {
        addToDoEvent();
        view.displayItems(app.getList());
        view.bindToggle(toggleToDoEvent);
    }

    return {init}

})();

export default toDoController;