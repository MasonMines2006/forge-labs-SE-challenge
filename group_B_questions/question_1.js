const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});y

class item {
    constructor(title, description, date_created, date_due, status = "New", importance = "Med") {
        this.title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;

        const valid_status = ["New", "Working On", "Finished"];
        if (valid_status.includes(status)) {
            this.status = status;
        } else {
            console.log("Invalid status. Setting to 'New'");
            this.status = "New";
        }

        const valid_importance = ["Low", "Med", "High"];
        if (valid_importance.includes(importance)) {
            this.importance = importance;
        } else {
            console.log("Invalid importance. Setting to 'Med'");
            this.importance = "Med";
        }
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDateDue(date_due) {
        this.date_due = date_due;
    }

    setStatus(status) {
        const valid_status = ["New", "Working On", "Finished"];
        if (valid_status.includes(status)) {
            this.status = status;
        } else {
            console.log("Invalid status. Setting to 'New'");
            this.status = "New";
        }
    }

    setImportance(importance) {
        const valid_importance = ["Low", "Med", "High"];
        if (valid_importance.includes(importance)) {
            this.importance = importance;
        } else {
            console.log("Invalid importance. Setting to 'Med'");
            this.importance = "Med";
        }
    }
}

class todolist {
    constructor() {
        this.items = [];
    }

    add_item(title, description, date_due) {
        const date_created = new Date();
        const newItem = new item(title, description, date_created, date_due);
        this.items.push(newItem);
    }

    deleteItem(title) {
        const index = this.items.findIndex(item => item.title === title);
        if (index !== -1) {
            this.items.splice(index, 1);
        } else {
            console.log("Item not found!");
        }
    }

    reorganizeList(title, newIndex) {
        const index = this.items.findIndex(item => item.title === title);
        if (index !== -1 && newIndex >= 0 && newIndex < this.items.length) {
            const [item] = this.items.splice(index, 1); // Remove the item
            this.items.splice(newIndex, 0, item); // Insert it at new index
            console.log("Change successful");
        } else {
            console.log("Invalid index or item not found.");
        }
    }

    editList(title, edit_type, change) {
        const item = this.items.find(item => item.title === title);
        if (!item) {
            console.log("Item not found!");
            return;
        }

        switch (edit_type) {
            case "title":
                item.setTitle(change);
                console.log("Change successful");
                break;
            case "description":
                item.setDescription(change);
                console.log("Change successful");
                break;
            case "date_due":
                item.setDateDue(change);
                console.log("Change successful");
                break;
            case "status":
                item.setStatus(change);
                if (item.status === "Finished") {
                    // Use readline to ask user for input
                    rl.question("Remove item? (y/n) ", (userInput) => {
                        if (userInput === "y") {
                            this.deleteItem(item.title);
                        }
                        console.log("Change successful");
                        rl.close(); // Close the readline interface after use
                    });
                }
                break;
            case "importance":
                item.setImportance(change);
                console.log("Change successful");
                break;
            default:
                console.log("Edit type not recognized");
        }
    }
}

function test_toDoList() {
    const myList = new todolist();

// Add items
    myList.add_item("Buy groceries", "Milk, Eggs, Bread", "2023-12-20");
    myList.add_item("Clean house", "Dusting and vacuuming", "2023-12-21");

// Edit an item
    myList.editList("Buy groceries", "importance", "High");

// Reorganize list
    myList.reorganizeList("Clean house", 0);

// Delete an item
    myList.editList("Buy groceries", "status", "Finished");

    console.log(myList.items);
}

test_toDoList()