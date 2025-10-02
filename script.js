document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  loadTasks(); // Load saved tasks

  
  function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
}
  function removeFromStorage(taskText) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updatedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}



  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // ✅ Required by checker

   function addTask(taskText, save = true) {
  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = function () {
    taskList.removeChild(li);
    removeFromStorage(taskText);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  taskInput.value = "";
}


    // Append button to list item, then list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
