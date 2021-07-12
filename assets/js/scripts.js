var buttonEL = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");

buttonEL.addEventListener("click", createTaskHandler);
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}
