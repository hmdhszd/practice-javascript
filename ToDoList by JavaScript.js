quit = false
todolist = []

while (!quit) {
    ans = prompt("Please select an action: \n Enter:\n  \'a\' to Add \n \'d\' to Display \n \'m\' to Mark as done \n \'q\' to Quit ")
    if (ans == "q") {
        quit = true
    } else if (ans == "a") {
        newitem = prompt("Please enter new task to add to TO DO LIST :")
        todolist.push(newitem)
        alert(newitem + " was added to TO DO LIST.")
    } else if (ans == "d") {
        alert(todolist)
    } else if (ans == "m") {
        ritem = prompt("which item do you want to mark as done?")
        todolist.pop(ritem)
        alert("this item was mark as done and removed from list.")
    }
}