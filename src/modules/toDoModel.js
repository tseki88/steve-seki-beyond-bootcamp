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
        idCounter: 1,
    }

    const getList = () => state.toDoList;

    const addToList = (toDoItem) => {
        if (!toDoItem) return;

        const item = ToDoItem(toDoItem);
        item.id = state.idCounter;
        state.idCounter++;
        state.toDoList.push(item)
    }
    
    const removeFromList = (id) => {
        const list = state.toDoList;
        const index = list.findIndex((item) => {
            return item.id === parseInt(id);
        });
        list.splice(index, 1);
    }
    
    const toggleComplete = (id) => {
        const list = state.toDoList;
        const index = list.findIndex((item) => {
            return item.id === parseInt(id)
        });
        list[index].isCompleted = !list[index].isCompleted;
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