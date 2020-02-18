
// Make an Object which takes an input
//  - the master object with shared properties
// 

class ToDoItem {
    constructor(id, title, description, priority, complete) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
    }
}

class Project {
    constructor(id, title, list = []) {
        this.id = id;
        this.title = title;
        this.list = list;
    }
}


// 
document.querySelector(".newItem").addEventListener("submit", (e) => {
    e.preventDefault();

})

