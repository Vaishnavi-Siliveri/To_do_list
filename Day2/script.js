// Select elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task function
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark task as completed when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete task
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();  // prevents marking complete
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input
});
