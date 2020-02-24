import app from './toDoModel';
import toDoView from './toDoView';

const toDoController = (() => {
    // const renderList = (project) => {
    //     app.getList().forEach((item) => {
    //         const { id } = item;
    //         // const name = 
    //     })    
    //     const listItems = [];

        
    // }
    const submitEvent = () => {
        document.querySelector(".newItem").addEventListener("submit", (e) => {
            e.preventDefault();
            const noteValue = document.querySelector("#title").value;
            app.addToList(noteValue);
            toDoView().displayItems(app.getList());
        })
    }


    const view = toDoView();
    
    const init = () => {
        view.renderList();
        view.displayItems(app.getList());
        submitEvent();
    }

    return {init}

})();

export default toDoController;