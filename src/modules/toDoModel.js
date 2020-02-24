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

    const getTitle = () => state.title;

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
        getTitle,
    }
}

const projectList = () => {
    const state = {
        currentProject: 1,
        projectList: [],
        idCounter: 1,
    }

    const getProjectList = () => state.projectList;

    const getCurrentProject = () => state.currentProject;

    const addToProjectList = (project) => {
        if (!project) return;

        const item = {project};
        item.id = state.idCounter;
        state.idCounter++;
        state.projectList.push(item)

        // state.currentProject = item.id;
    }
    
    const removeFromProjectList = (id) => {
        const list = state.projectList;
        const index = list.findIndex((item) => {
            return item.id === parseInt(id);
        });
        list.splice(index, 1);
    }

    return {
        addToProjectList,
        removeFromProjectList,
        getProjectList,
        getCurrentProject,
    }
}

const app = (() => {
    const defaultProject = Project("Welcome");
    const initProject = projectList();
    initProject.addToProjectList(defaultProject);

    console.log(initProject.getProjectList())
    return {
        defaultProject,
        initProject
    }
})();

export default app;