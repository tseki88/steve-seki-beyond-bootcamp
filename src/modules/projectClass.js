const Project = (title) => {
    return {
        title,
        toDoList: [],
        addToList(toDoItem) {
            this.toDoList.push(toDoItem)
        }
    }
}

export default Project;