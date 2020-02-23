const ToDoItem = (title) => {

    return {
        title,
        isPriority: false,
        isCompleted: false,
    }
}

const Project = (title) => {
    const state = {
        toDoList: [],
        title,
        idCounter = 1,
    }

    const addToList = (toDoItem) => {
        if (!toDoItem) return;

        const item = ToDoItem(title);
        item.id = state.idCounter;
        state.idCounter++;

        state.toDoList.push(item)
    }
    
    const removeFromList = (toDoItem) => {
        
    }
    
    const toggleComplete = (id) => {
        const item = document.querySelector(id);
        item.isCompleted = !item.isCompleted;
    }

    const togglePriority = (id) => {
        const item = document.querySelector(id);
        item.isPriority = !item.isPriority;
    }
}

export default ToDoItem;