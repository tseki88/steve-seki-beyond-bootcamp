import ToDoItem from "./toDoClass";
import renderList from "./render";

const submitEvent = (currentProject) => {
    document.querySelector(".newItem").addEventListener("submit", (e) => {
        e.preventDefault();
        const noteValue = document.querySelector("#title").value;
        currentProject.addToList(ToDoItem(noteValue));
        console.log(currentProject);
        renderList();
        // toggleComplete();
    })
}



export default submitEvent;