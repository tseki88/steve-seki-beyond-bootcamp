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
    }

    let idCounter = 1;

    const getList = () => state.toDoList;

    const addToList = (toDoItem) => {
        if (!toDoItem) return;

        const item = ToDoItem(toDoItem);
        item.id = idCounter;
        idCounter++;
        state.toDoList.push(item)
    }
    
    const removeFromList = (id) => {
        const list = state.toDoList;
        const index = list.findIndex((item) => item.id === id);
        list.splice(index, 1);
        console.log(list);
        console.log(state.toDoList);
    }
    
    const toggleComplete = (id) => {
        const item = document.querySelector(id);
        item.isCompleted = !item.isCompleted;
    }

    const togglePriority = (id) => {
        const item = document.querySelector(id);
        item.isPriority = !item.isPriority;
    }

    return {
        addToList,
        removeFromList,
        toggleComplete,
        togglePriority,
        getList,
    }
}

const app = (() => {
    const defaultProject = Project("Welcome");
    return defaultProject;
})();

export default app;
export {Project }