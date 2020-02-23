import {Project} from './toDoModel';


test("add to do object to list, object exists with right title", () => {
    const testProject = Project("test");
    const list = testProject.getList();

    testProject.addToList("test object");
    expect(list[0].title).toBe("test object")
})

test("check if full object is what's expected", () => {
    const testProject = Project("test");
    const list = testProject.getList();
    
    testProject.addToList("test");
    testProject.addToList("test2");
    
    expect(list).toEqual([{
        title: "test",
        isCompleted: false,
        isPriority: false,
        id: 1,
    }, {
        title: "test2",
        isCompleted: false,
        isPriority: false,
        id: 2,
    }])
})

