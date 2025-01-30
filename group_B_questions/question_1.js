// Question 1:
// My brand new startup wants to build a better online productivity tracker. We think that current trackers are far too complicated, and we want to make something that is a simple to-do list.
//
//     Without worrying about design/HTML, write the functions needed to make this to-do list workable.
//
//     Write the JavaScript functions to make this to-do list functional. Please do not write any HTML or use frameworks like jQuery. The list should be saved as an array of objects. Imagine each piece of functionality would be triggered by a button that called the corresponding function.
//
// The requirements for the to do list are:
// To Do items should have properties of title, description, date created, date due, and its status (New, Working on, Finished).
// The ability to add and delete items
// The ability to reorganize the list (i.e. bring one to top, send down 1, etc)
// The ability to edit information about each task where appropriate
// Any additional functionality you can think of is highly encouraged, but keep in mind the to do list is supposed to be simple.

class item {
    constructor(title, description, date_created, date_due, status) {
        this.title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;
        this.status = status;
    }
}

class todolist {
    constructor() {
        this.items = [];
    }
    add_item(title, description, date_due) {
        const date_created = new Date();
        const item1 = new item(title, description, date_created, date_due = "New");
        this.items.push(item1)
    }
    deleteItem(title) {
        const index = this.items.findIndex(item => item.title === title);
        if (index !== -1) {
            this.items.splice(index, 1);
        } else {
            console.log("Item not found!");
        }
    }
    reorganizeList(title, index) {
        if (index > this.items.length) {
            console.log("Couldn't re-order list");
        } else {
            const index = this.items.findIndex(item => item.title === title);
            if (index !== -1) {
                const item = this.items.splice(index, 1)[0]; // Remove the item
            }
        }
    }
}