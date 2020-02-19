import ToDoItem from "./toDoClass";
import renderList from "./render";

const submitEvent = (currentProject) => {
    document.querySelector(".newItem").addEventListener("submit", (e) => {
        e.preventDefault();
        const noteValue = document.querySelector("#title").value;
        // console.log(noteValue);
        currentProject.addToList(ToDoItem(noteValue));
        console.log(currentProject);
        renderList();
    })
}

export default submitEvent;