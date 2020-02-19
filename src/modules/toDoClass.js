const ToDoItem = (title) => {
    return {
        title,
        priority: false,
        completed: false,
        toggleComplete() {
            this.completed = !this.completed
        },
        togglePriority() {
            this.priority = !this.priority
        }
    }
}

export default ToDoItem;