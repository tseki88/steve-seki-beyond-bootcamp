
// Make an Object which takes an input
//  - the master object with shared properties
// 

class ToDoItem {
    constructor(id, title, description, date, priority, complete) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
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


